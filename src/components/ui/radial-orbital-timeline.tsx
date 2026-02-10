"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  // Detect theme on mount and when it changes
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = isMobile ? 120 : 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    if (isDark) {
      switch (status) {
        case "completed":
          return "text-white bg-black border-white";
        case "in-progress":
          return "text-black bg-white border-black";
        case "pending":
          return "text-white bg-black/40 border-white/50";
        default:
          return "text-white bg-black/40 border-white/50";
      }
    } else {
      // Light theme
      switch (status) {
        case "completed":
          return "text-white bg-primary border-primary";
        case "in-progress":
          return "text-white bg-purple-600 border-purple-600";
        case "pending":
          return "text-foreground bg-gray-300 border-gray-400";
        default:
          return "text-foreground bg-gray-300 border-gray-400";
      }
    }
  };

  return (
    <div
      className={`w-full flex flex-col items-center justify-center overflow-hidden ${isMobile ? 'min-h-auto py-8' : 'h-screen'}`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className={`relative w-full max-w-4xl flex items-center justify-center ${isMobile ? 'h-64' : 'h-full'}`}>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className={`absolute ${isMobile ? 'w-12 h-12' : 'w-20 h-20'} rounded-full ${isDark ? 'border-white/20' : 'border-primary/30'} border animate-ping opacity-70`}></div>
            <div
              className={`absolute ${isMobile ? 'w-16 h-16' : 'w-24 h-24'} rounded-full ${isDark ? 'border-white/10' : 'border-primary/20'} border animate-ping opacity-50`}
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-white/80' : 'bg-primary'} backdrop-blur-md`}></div>
          </div>

          <div className={`absolute ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} rounded-full ${isDark ? 'border-white/10' : 'border-primary/20'} border`}></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isHovered = hoveredItemId === item.id;
            const shouldShowCard = isExpanded || isHovered;
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: shouldShowCard ? 200 : position.zIndex,
              opacity: shouldShowCard ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer group"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: isDark
                      ? `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`
                      : `radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? isDark ? "bg-white text-black" : "bg-primary text-white"
                      : isRelated
                      ? isDark ? "bg-white/50 text-black" : "bg-primary/50 text-white"
                      : isDark ? "bg-black text-white" : "bg-white text-primary border-primary"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? isDark ? "border-white shadow-lg shadow-white/30" : "border-primary shadow-lg shadow-primary/30"
                      : isRelated
                      ? isDark ? "border-white animate-pulse" : "border-primary animate-pulse"
                      : isDark ? "border-white/40" : "border-primary/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={isMobile ? 12 : 16} />
                </div>

                <div
                  className={`
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${shouldShowCard ? (isDark ? "text-white" : "text-primary") : (isDark ? "text-white/70" : "text-foreground/70")}
                `}
                >
                  {item.title}
                </div>

                {shouldShowCard && (
                  <Card className={`absolute ${isMobile ? 'top-14 w-48' : 'top-20 w-64'} left-1/2 -translate-x-1/2 ${isDark ? "bg-black/90 border-white/30 shadow-xl shadow-white/10" : "bg-white border-primary/30 shadow-xl shadow-primary/10"} backdrop-blur-lg overflow-visible`}>
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 ${isDark ? "bg-white/50" : "bg-primary/50"}`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-xs ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className={`text-xs font-mono ${isDark ? "text-white/50" : "text-foreground/50"}`}>
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className={`text-sm mt-2 ${isDark ? "text-white" : "text-foreground"}`}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={`text-xs ${isDark ? "text-white/80" : "text-foreground/80"}`}>
                      <p>{item.content}</p>

                      <div className={`mt-4 pt-3 ${isDark ? "border-white/10" : "border-primary/10"} border-t`}>
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center">
                            <Zap size={10} className="mr-1" />
                            Energy Level
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className={`w-full h-1 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-primary/10"}`}>
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className={`mt-4 pt-3 ${isDark ? "border-white/10" : "border-primary/10"} border-t`}>
                          <div className="flex items-center mb-2">
                            <Link size={10} className={`mr-1 ${isDark ? "text-white/70" : "text-foreground/70"}`} />
                            <h4 className={`text-xs uppercase tracking-wider font-medium ${isDark ? "text-white/70" : "text-foreground/70"}`}>
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className={`flex items-center h-6 px-2 py-0 text-xs rounded-none transition-all ${isDark ? "border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white" : "border-primary/30 bg-transparent hover:bg-primary/10 text-foreground/80 hover:text-foreground"}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className={`ml-1 ${isDark ? "text-white/60" : "text-foreground/60"}`}
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
