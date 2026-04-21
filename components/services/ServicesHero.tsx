"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealText from "../animations/RevealText";
import FadeIn from "../animations/FadeIn";

const pills = ["Interior Design", "General Construction", "Architectural Planning", "Turnkey Delivery"];

export default function ServicesHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="page-hero">
      <div className="page-hero-grid">
        <div className="md:col-span-8">
          <FadeIn direction="left" delay={0.1}>
            <span className="eyebrow">Our Expertise</span>
          </FadeIn>

          <RevealText
            text="End-to-End Excellence in Built Environments."
            as="h1"
            delay={0.3}
            wordDelay={0.07}
            className="page-hero-title"
          />

          {/* Animated pills */}
          <motion.div
            className="flex flex-wrap gap-2.5 mt-7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {pills.map((item, i) => (
              <motion.span
                key={item}
                className="px-4 py-2 bg-[#131b2e] text-[#e6c275] text-xs font-label uppercase tracking-widest rounded-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.08 }}
                whileHover={{ backgroundColor: "#e6c275", color: "#131b2e", y: -2 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <FadeIn direction="right" delay={0.4} className="md:col-span-4">
          <div className="page-hero-aside">
            <p className="page-hero-copy text-base">
              We translate architectural vision into physical permanence through a
              vertically integrated approach to design and construction.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
