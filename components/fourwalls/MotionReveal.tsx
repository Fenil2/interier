"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  variant?: "up" | "left" | "right" | "zoom";
  threshold?: number;
};

export default function MotionReveal({
  children,
  className = "",
  delayMs = 0,
  durationMs = 900,
  variant = "up",
  threshold = 0.18
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`cinematic-reveal cinematic-reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`
      }}
    >
      {children}
    </div>
  );
}
