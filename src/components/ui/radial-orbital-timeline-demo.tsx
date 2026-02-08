"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  // {
  //   id: 1,
  //   title: "Planning",
  //   date: "Jan 2024",
  //   content: "Project planning and requirements gathering phase.",
  //   category: "Planning",
  //   icon: Calendar,
  //   relatedIds: [2],
  //   status: "completed" as const,
  //   energy: 100,
  // },
  // {
  //   id: 2,
  //   title: "Design",
  //   date: "Feb 2024",
  //   content: "UI/UX design and system architecture.",
  //   category: "Design",
  //   icon: FileText,
  //   relatedIds: [1, 3],
  //   status: "completed" as const,
  //   energy: 90,
  // },
  // {
  //   id: 3,
  //   title: "Development",
  //   date: "Mar 2024",
  //   content: "Core features implementation and testing.",
  //   category: "Development",
  //   icon: Code,
  //   relatedIds: [2, 4],
  //   status: "in-progress" as const,
  //   energy: 60,
  // },
  // {
  //   id: 4,
  //   title: "Testing",
  //   date: "Apr 2024",
  //   content: "User testing and bug fixes.",
  //   category: "Testing",
  //   icon: User,
  //   relatedIds: [3, 5],
  //   status: "pending" as const,
  //   energy: 30,
  // },
  // {
  //   id: 5,
  //   title: "Release",
  //   date: "May 2024",
  //   content: "Final deployment and release.",
  //   category: "Release",
  //   icon: Clock,
  //   relatedIds: [4],
  //   status: "pending" as const,
  //   energy: 10,
  // },


  {
    id: 1,
    title: "Discovery & Strategy",
    date: "Phase 01",
    content:
      "We understand your goals, users, and constraints. No assumptions.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design ",
    date: "Phase 02",
    content:
      "UX flows, UI design, and system architecture—built for scale.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "Development ",
    date: "Phase 03",
    content:
      "Fast, focused development with regular updates and reviews.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Testing & Optimization",
    date: "Phase 04",
    content:
      "QA, edge cases, and real-user feedback.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "Launch",
    date: "Phase 05",
    content:
      "Deploy, monitor, and improve based on real usage.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 100,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="flex items-center justify-between gap-12">
      {/* Content Section */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
              Our Process
            </span>
            <h2 className="font-display text-4xl md:text-7xl tracking-tighter leading-none mb-8 text-foreground">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, collaborative approach that ensures your project succeeds from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="flex-1">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </div>
  );
}

export default {
  RadialOrbitalTimelineDemo,
};
