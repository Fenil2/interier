"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string; // e.g. "150+", "98%", "0.1mm"
  className?: string;
  duration?: number;
}

function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^0-9]*)([0-9.]+)([^0-9.]*)$/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  return { num: parseFloat(match[2]), prefix: match[1], suffix: match[3] };
}

export default function CountUp({ value, className = "", duration = 2000 }: CountUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");
  const { num, prefix, suffix } = parseValue(value);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const isDecimal = num % 1 !== 0;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * num;
      setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toString());
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
