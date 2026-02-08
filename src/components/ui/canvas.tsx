// Small, typed port of the provided canvas animation adapted for TS
// This module exposes `initCanvas` which takes an HTMLCanvasElement and returns a cleanup function.

type Pos = { x: number; y: number };

export function initCanvas(canvas: HTMLCanvasElement) {
  if (!canvas) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let animationId: number | null = null;
  let running = true;

  const E = {
    debug: true,
    friction: 0.5,
    trails: 80,
    size: 50,
    dampening: 0.025,
    tension: 0.99,
  } as const;

  let pos: Pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  function resizeCanvas() {
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight;
  }

  function Node() {
    return { x: 0, y: 0, vy: 0, vx: 0 } as any;
  }

  // Hue oscillator (ported from `n` function in original)
  function HueOscillator(opts?: { phase?: number; offset?: number; frequency?: number; amplitude?: number }) {
    const settings = {
      phase: opts?.phase ?? 0,
      offset: opts?.offset ?? 0,
      frequency: opts?.frequency ?? 0.001,
      amplitude: opts?.amplitude ?? 1,
    };

    return {
      update() {
        settings.phase += settings.frequency;
        return settings.offset + Math.sin(settings.phase) * settings.amplitude;
      },
    };
  }

  // Line class
  function Line(opts: { spring?: number }) {
    const spring = (opts?.spring ?? 0.45) + 0.1 * Math.random() - 0.05;
    const friction = E.friction + 0.01 * Math.random() - 0.005;
    const nodes: any[] = [];

    for (let i = 0; i < E.size; i++) {
      const n = Node();
      n.x = pos.x;
      n.y = pos.y;
      nodes.push(n);
    }

    return {
      update() {
        let e = spring;
        let t = nodes[0];
        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;
        for (let i = 0; i < nodes.length; i++) {
          t = nodes[i];
          if (i > 0) {
            const n = nodes[i - 1];
            t.vx += (n.x - t.x) * e;
            t.vy += (n.y - t.y) * e;
            t.vx += n.vx * E.dampening;
            t.vy += n.vy * E.dampening;
          }
          t.vx *= friction;
          t.vy *= friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= E.tension;
        }
      },
      draw() {
        let e: any, t: any;
        let n = nodes[0].x;
        let i = nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(n, i);
        const aLimit = nodes.length - 2;
        for (let a = 1; a < aLimit; a++) {
          e = nodes[a];
          t = nodes[a + 1];
          n = 0.5 * (e.x + t.x);
          i = 0.5 * (e.y + t.y);
          ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        e = nodes[aLimit];
        t = nodes[aLimit + 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx.stroke();
        ctx.closePath();
      },
    };
  }

  // State
  let lines: ReturnType<typeof Line>[] = [];
  const hueOsc = HueOscillator({ phase: Math.random() * 2 * Math.PI, amplitude: 85, frequency: 0.0015, offset: 285 });

  function regenerateLines() {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }
  }

  function onPointerUpdate(e: PointerEvent | TouchEvent) {
    if ((e as TouchEvent).touches) {
      const t = (e as TouchEvent).touches[0];
      pos.x = t.pageX;
      pos.y = t.pageY;
    } else {
      const p = e as PointerEvent;
      pos.x = p.clientX;
      pos.y = p.clientY;
    }
    e.preventDefault?.();
  }

  function onTouchStart(e: TouchEvent) {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }

  function onMousemoveStarter(e: MouseEvent | TouchEvent) {
    // Remove starter listeners and add move listeners
    document.removeEventListener("mousemove", onMousemoveStarter as any);
    document.removeEventListener("touchstart", onMousemoveStarter as any);
    document.addEventListener("mousemove", onPointerUpdate as any);
    document.addEventListener("touchmove", onPointerUpdate as any);
    document.addEventListener("touchstart", onTouchStart as any);
    onPointerUpdate(e as any);
    regenerateLines();
    render();
  }

  function renderFrame() {
    if (!running) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(hueOsc.update())},100%,50%,0.025)`;
    ctx.lineWidth = 10;
    for (let t = 0; t < E.trails; t++) {
      const line = lines[t];
      line.update();
      line.draw();
    }
  }

  function rtLoop() {
    renderFrame();
    animationId = requestAnimationFrame(rtLoop);
  }

  function render() {
    if (!running) return;
    rtLoop();
  }

  // init
  resizeCanvas();
  document.addEventListener("mousemove", onMousemoveStarter as any);
  document.addEventListener("touchstart", onMousemoveStarter as any);
  window.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (!running) {
      running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    running = false;
  });

  // ensure initial lines exist so render() can loop
  regenerateLines();
  render();

  // Cleanup function
  return function cleanup() {
    running = false;
    if (animationId) cancelAnimationFrame(animationId);
    document.removeEventListener("mousemove", onMousemoveStarter as any);
    document.removeEventListener("touchstart", onMousemoveStarter as any);
    document.removeEventListener("mousemove", onPointerUpdate as any);
    document.removeEventListener("touchmove", onPointerUpdate as any);
    document.removeEventListener("touchstart", onTouchStart as any);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("orientationchange", resizeCanvas);
  };
}
