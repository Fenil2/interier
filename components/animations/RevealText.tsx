"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function RevealText({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.07,
  as: Tag = "h2",
}: RevealTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * wordDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
