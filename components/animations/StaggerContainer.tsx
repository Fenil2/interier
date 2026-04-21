"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  once?: boolean;
  amount?: number;
  direction?: "up" | "left" | "scale" | "none";
  duration?: number;
}

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  childDelay = 0,
  once = true,
  amount = 0.1,
  direction = "up",
  duration = 0.65,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay,
      },
    },
  };

  const childVariants = {
    up:    { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
    none:  { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Wrap each direct child in a motion.div */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={childVariants}
              transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={childVariants}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}
