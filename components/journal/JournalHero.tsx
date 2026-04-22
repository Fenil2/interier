"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../animations/FadeIn";
import RevealText from "../animations/RevealText";

const topics = ["All Posts", "Interiors", "Materials", "Renovation", "Construction"];

export default function JournalHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="page-hero">
      <div className="page-hero-grid !items-center">
        <FadeIn direction="left" className="md:col-span-7">
          <span className="eyebrow">Aurelian Blog</span>
          <RevealText
            text="Ideas for Better Built Spaces"
            as="h1"
            delay={0.3}
            wordDelay={0.07}
            className="page-hero-title"
          />
          <p className="page-hero-copy">
            Practical notes from our studio on interiors, construction details,
            renovation planning, material choices, and the decisions that make a
            space feel composed.
          </p>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="md:col-span-5">
          <div className="rounded-md border border-[#131b2e]/10 bg-white p-4 shadow-sm sm:p-5">
            <p className="mb-4 text-[0.68rem] font-label uppercase tracking-widest text-[#76777d]">
              Browse Topics
            </p>
            <motion.div
              className="flex flex-wrap gap-2.5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
            >
              {topics.map((topic, index) => (
                <motion.span
                  key={topic}
                  className={`rounded-sm border px-3.5 py-2 font-label text-[0.68rem] uppercase tracking-widest transition-colors ${
                    index === 0
                      ? "border-[#131b2e] bg-[#131b2e] text-[#e6c275]"
                      : "border-[#131b2e]/15 text-[#3c475a] hover:border-[#131b2e] hover:text-[#131b2e]"
                  }`}
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.75 + index * 0.08 }}
                  whileHover={{ y: -2 }}
                >
                  {topic}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
