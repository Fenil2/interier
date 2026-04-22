"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../animations/FadeIn";
import RevealText from "../animations/RevealText";

const clientStats = [
  ["150+", "Completed Works"],
  ["98%", "Client Retention"],
  ["24", "Design Awards"],
  ["12", "Years of Mastery"],
];

export default function ClientsHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="page-hero">
      <div className="page-hero-grid !items-center">
        <FadeIn direction="left" className="md:col-span-7">
          <span className="eyebrow">Our Clients</span>
          <RevealText
            text="Partnerships Built on Trust"
            as="h1"
            delay={0.3}
            wordDelay={0.07}
            className="page-hero-title"
          />
          <p className="page-hero-copy">
            From private homes to commercial environments, our clients come to
            us for clarity, craft, and a process that keeps ambitious spaces
            moving with confidence.
          </p>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="md:col-span-5">
          <div className="grid grid-cols-2 gap-3 rounded-md border border-[#131b2e]/10 bg-white p-4 shadow-sm sm:p-5">
            {clientStats.map(([value, label], index) => (
              <motion.div
                key={label}
                className="rounded-sm bg-[#f6f3ee] p-4"
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.65 + index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, backgroundColor: "#f0ede9" }}
              >
                <p
                  className="text-3xl font-bold leading-none text-[#131b2e]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {value}
                </p>
                <p className="mt-3 font-label text-[0.65rem] uppercase tracking-widest text-[#76777d]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
