"use client";

import { useEffect, useRef } from "react";
import { initCanvas } from "./canvas";

export default function AnimatedCursor() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    canvas.id = "cursor-canvas";
    canvas.className = "pointer-events-none fixed inset-0 z-[9999]";
    const cleanup = initCanvas(canvas);
    return () => cleanup();
  }, []);

  return <canvas ref={ref} aria-hidden />;
}
