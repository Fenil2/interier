"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./animations/FadeIn";

const reasons = [
  "Over 500 plus Projects Completed",
  "Strong Presence Across South India",
  "End to End Turnkey Solutions",
  "On Time Project Delivery",
  "Transparent Pricing and Execution",
  "Experienced Design and Construction Team",
];

const differentPoints = [
  "Proven Experience with 500 plus Projects",
  "Dedicated Project Management",
  "High Quality Materials",
  "Customized Design Approach",
  "Clear Communication",
  "Timely Delivery",
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-16 md:py-24 bg-[#131b2e] text-white relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none opacity-15" />

      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1.2 }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 L100 0 V100 H0Z" fill="white" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#e6c275] to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "8rem" } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 z-10">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <FadeIn direction="left">
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Why Choose Fourwalls Interiors <br />
                <span className="italic gradient-text-gold">&amp; Constructions</span>
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-6">
            <FadeIn direction="right" delay={0.2}>
              <p className="text-[#d0d8e6] leading-relaxed text-base md:text-lg max-w-xl">
                At Fourwalls Interiors &amp; Constructions, we focus on delivering
                value through quality work and professional execution.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <FadeIn key={reason} direction="up" delay={i * 0.1}>
              <motion.div
                className="p-7 border border-white/10 bg-white/[0.03] rounded-sm group relative overflow-hidden h-full"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  y: -4,
                  borderColor: "rgba(230,194,117,0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="absolute top-5 right-6 text-5xl font-bold text-white/5 select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-sm bg-[#e6c275]/10 border border-[#e6c275]/20">
                  <span className="material-symbols-outlined text-[#e6c275] text-[22px]">
                    task_alt
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {reason}
                </h3>

                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#e6c275] to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <FadeIn direction="up">
            <h3
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              What Makes Us Different
            </h3>
            <p className="mt-5 max-w-3xl text-[#d0d8e6] leading-relaxed text-base md:text-lg">
              At Fourwalls Interiors &amp; Constructions, we focus on delivering
              value through quality work and professional execution.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {differentPoints.map((point, i) => (
              <FadeIn key={point} direction="up" delay={i * 0.08}>
                <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-white leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
