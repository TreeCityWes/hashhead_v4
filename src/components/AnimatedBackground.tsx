"use client";

import { useEffect, useRef } from "react";

const GRID_SPACING = 72;

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.003;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Technical grid
      ctx.strokeStyle = "rgba(120, 193, 255, 0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Ambient glow
      const cx1 = canvas.width * 0.3 + Math.sin(time) * 100;
      const cy1 = canvas.height * 0.4 + Math.cos(time * 0.7) * 80;
      const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, canvas.width * 0.4);
      g1.addColorStop(0, "rgba(124, 233, 255, 0.09)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx2 = canvas.width * 0.7 + Math.cos(time * 0.5) * 120;
      const cy2 = canvas.height * 0.6 + Math.sin(time * 0.8) * 60;
      const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, canvas.width * 0.35);
      g2.addColorStop(0, "rgba(111, 244, 196, 0.06)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Faint signal beam crossing the page.
      ctx.strokeStyle = "rgba(82, 213, 255, 0.12)";
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * (0.3 + Math.sin(time * 0.8) * 0.04));
      ctx.lineTo(canvas.width, canvas.height * (0.66 + Math.cos(time * 0.6) * 0.05));
      ctx.stroke();
    };

    resize();
    animationId = requestAnimationFrame(animate);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
