"use client";
import { useEffect, useRef } from "react";

export default function GlobalEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const barRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring   = ringRef.current;
    const bar    = barRef.current;
    if (!cursor || !ring || !bar) return;

    let ringX = 0, ringY = 0;
    let rafId: number;

    function moveCursor(e: MouseEvent) {
      cursor!.style.left = e.clientX + "px";
      cursor!.style.top  = e.clientY + "px";
    }

    function animateRing() {
      // lazy-follow for ring
      rafId = requestAnimationFrame(animateRing);
    }
    animateRing();

    /* ring follows cursor with spring-lag */
    let targetX = 0, targetY = 0;
    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor!.style.left = targetX + "px";
      cursor!.style.top  = targetY + "px";
    }

    function tick() {
      ringX += (targetX - ringX) * 0.12;
      ringY += (targetY - ringY) * 0.12;
      ring!.style.left = ringX + "px";
      ring!.style.top  = ringY + "px";
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    /* scroll progress bar */
    function onScroll() {
      const scrolled = window.scrollY;
      const total    = document.body.scrollHeight - window.innerHeight;
      const pct      = total > 0 ? (scrolled / total) * 100 : 0;
      bar!.style.width = pct + "%";
    }

    document.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" ref={barRef} style={{ width: "0%" }} />
      <div id="custom-cursor"      ref={cursorRef} />
      <div id="custom-cursor-ring" ref={ringRef}   />
    </>
  );
}
