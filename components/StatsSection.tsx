"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./animations/CountUp";
import FadeIn from "./animations/FadeIn";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12",   label: "Design Awards" },
  { value: "98%",  label: "Client Retention" },
  { value: "04",   label: "Global Offices" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-36 bg-[#131b2e] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />

      {/* Animated triangle */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.04 } : {}}
        transition={{ duration: 1.2 }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 L100 0 V100 H0Z" fill="white" />
        </svg>
      </motion.div>

      {/* Gold accent top line */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#e6c275] to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "8rem" } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,194,117,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left copy */}
          <FadeIn direction="left">
            <span className="eyebrow mb-6 block">Proven Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              The Standard of{" "}
              <span className="gradient-text-gold italic">Structural Poise</span>
            </h2>
            <p className="text-[#9aa5b8] text-lg leading-relaxed mb-10">
              We don&apos;t just build structures; we curate legacies. Our
              commitment to uncompromising quality is reflected in every project
              we undertake.
            </p>
            <motion.a
              href="/about"
              className="inline-flex items-center gap-3 border border-[#e6c275]/40 text-[#e6c275] px-7 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest"
              whileHover={{ backgroundColor: "#e6c275", color: "#131b2e", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              Our Story
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </motion.a>
          </FadeIn>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-5 lg:pl-12 lg:border-l border-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="space-y-2 p-6 border border-white/8 rounded-sm relative overflow-hidden group cursor-default"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.06)", y: -4 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at center, rgba(230,194,117,0.07) 0%, transparent 70%)" }}
                />
                <p className="text-5xl font-bold text-[#e6c275] relative"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}>
                  <CountUp value={stat.value} duration={2200} />
                </p>
                <p className="font-label text-xs uppercase tracking-widest text-white/60 relative">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
