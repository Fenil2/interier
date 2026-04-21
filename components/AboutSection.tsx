"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./animations/FadeIn";
import CountUp from "./animations/CountUp";

const miniStats = [
  { value: "150+", label: "Projects" },
  { value: "12",   label: "Awards" },
  { value: "04",   label: "Offices" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 md:py-36 bg-surface relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      {/* Animated ambient glow */}
      <motion.div
        className="absolute -right-32 top-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,194,117,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Image column ──────────────────────────── */}
          <FadeIn direction="left" className="lg:col-span-7 relative group">
            {/* Gold accent line — animated draw */}
            <motion.div
              className="absolute -top-6 left-0 h-[3px] bg-[#e6c275] rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "4rem" }}
            />

            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
              <motion.img
                alt="Building Spaces"
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-10 -right-6 md:-right-10 hidden md:block w-60 h-60 bg-[#131b2e] p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="w-8 h-[2px] bg-[#e6c275] mb-4" />
              <p className="text-4xl font-bold text-[#e6c275] italic"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}>
                <CountUp value="20+" />
              </p>
              <p className="font-label text-xs uppercase tracking-widest mt-3 text-white/70 leading-relaxed">
                Years of Heritage in Construction Excellence
              </p>
            </motion.div>
          </FadeIn>

          {/* ── Text column ───────────────────────────── */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-5 space-y-7">
            <span className="eyebrow">Our Philosophy</span>

            <motion.h2
              className="text-4xl md:text-5xl text-[#131b2e] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Building Spaces <br />
              <span className="italic text-[#e6c275]">That Inspire</span>
            </motion.h2>

            <motion.p
              className="text-[#2d3a4f] text-lg leading-relaxed font-body"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Architecture is more than just walls and foundations; it&apos;s
              the physical manifestation of a lifestyle. At Aurelian, we merge
              technical precision with aesthetic soul to create environments that
              breathe.
            </motion.p>

            <motion.p
              className="text-[#3c475a] text-base leading-relaxed font-body"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              Our process is rooted in &quot;The Structural Poise&quot;—a
              commitment to ensuring every design element serves a functional and
              emotional purpose.
            </motion.p>

            {/* Mini stats */}
            <motion.div
              className="flex gap-8 pt-4 border-t border-[#131b2e]/8"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {miniStats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.85 + i * 0.1 }}
                >
                  <p className="text-2xl font-bold text-[#131b2e]"
                    style={{ fontFamily: "var(--font-noto-serif), serif" }}>
                    <CountUp value={value} />
                  </p>
                  <p className="text-xs text-[#3c475a] uppercase tracking-widest font-label mt-0.5">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="pt-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="/about"
                className="inline-flex items-center gap-4 text-[#131b2e] font-bold uppercase tracking-widest text-xs group"
                whileHover={{ x: 4 }}
              >
                Our Philosophy
                <motion.span
                  className="h-px bg-[#e6c275] origin-left"
                  initial={{ width: "3rem" }}
                  whileHover={{ width: "5rem" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="material-symbols-outlined text-[#e6c275] text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </motion.a>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
