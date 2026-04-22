"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../animations/FadeIn";
import RevealText from "../animations/RevealText";

const typologyPills = ["Residential", "Commercial", "Construction", "Renovation"];

export default function PortfolioHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="page-hero">
      <div className="page-hero-grid">
        <FadeIn direction="left" className="lg:col-span-8">
          <span className="eyebrow">Milestones &amp; Achievements</span>
          <RevealText
            text="Architectural Poise & Timeless Structure"
            as="h1"
            delay={0.3}
            wordDelay={0.07}
            className="page-hero-title"
          />
          <p className="page-hero-copy">
            A curated anthology of spaces where structural integrity meets the
            soul of materiality. Explore our legacy of precision in luxury
            residential and high-performance commercial design.
          </p>

          <motion.div
            className="flex flex-wrap gap-2.5 mt-7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {typologyPills.map((item, i) => (
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
        </FadeIn>
        <FadeIn direction="right" delay={0.2} className="lg:col-span-4 flex lg:justify-end">
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right border-t lg:border-t-0 lg:border-l border-[#e6c275]/30 pt-6 lg:pt-0 lg:pl-8">
            <motion.span
              className="text-[3rem] md:text-[4.5rem] leading-[1.0] font-bold text-[#e6c275] italic"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.6, ease: "backOut" }}
            >
              24
            </motion.span>
            <span className="font-label text-xs uppercase tracking-widest text-[#3c475a] mt-1">Distinguished Awards</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
