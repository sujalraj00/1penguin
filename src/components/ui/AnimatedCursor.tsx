"use client";

import { useEffect, useRef, useState } from "react";
import { initCanvas } from "./canvas";

export default function AnimatedCursor() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    // Don't initialize canvas on mobile devices
    if (isMobile) return;

    const canvas = ref.current;
    if (!canvas) return;
    canvas.id = "cursor-canvas";
    canvas.className = "pointer-events-none fixed inset-0 z-[9999]";
    const cleanup = initCanvas(canvas);
    return () => cleanup();
  }, [isMobile]);

  // Don't render canvas on mobile
  if (isMobile) return null;

  return <canvas ref={ref} aria-hidden />;
}
