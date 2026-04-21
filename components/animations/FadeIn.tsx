"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -50 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 },   visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } },
  none:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
