"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./animations/FadeIn";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "South India", label: "Presence" },
  { value: "Turnkey", label: "End to End" },
  { value: "On Time", label: "Delivery" },
];

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0d1420] py-10 text-white md:py-20">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          alt="Final CTA Background"
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="h-[120%] w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,20,32,0.96) 0%, rgba(19,27,46,0.88) 45%, rgba(13,20,32,0.56) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern-light opacity-20" />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(90deg, transparent, #e6c275, transparent)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#e6c275]/50 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:gap-10 px-4 sm:px-8 md:px-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
        <div className="max-w-4xl">
          <FadeIn direction="up">
            <span className="eyebrow mb-8 block">Ready to Begin</span>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <h2
              className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Let&apos;s Create Something{" "}
              <span className="italic gradient-text-animate">Exceptional</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#d0d8e6] md:text-xl">
              Connect with Fourwalls Interiors &amp; Constructions today and take
              the first step toward transforming your space into something
              extraordinary.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.45}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden bg-[#e6c275] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#131b2e]"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 shimmer opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Get Free Consultation</span>
                <span className="material-symbols-outlined relative text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 bg-white/[0.03] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-[#e6c275]/60 hover:text-[#f0d48a]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Our Projects
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </motion.a>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="right" delay={0.35}>
          <div className="border border-white/15 bg-[#f6f3ee] p-5 text-[#131b2e] shadow-2xl md:p-6">
            <div className="border-b border-[#131b2e]/10 pb-5">
              <p className="font-label text-[11px] font-bold uppercase tracking-widest text-[#9e803a]">
                Fourwalls Interiors &amp; Constructions
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#3c475a]">
                Your trusted partner for interior design and construction across South India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#131b2e]/10">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  className="bg-[#f6f3ee] p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + i * 0.08 }}
                >
                  <p
                    className="text-2xl font-bold text-[#131b2e]"
                    style={{ fontFamily: "var(--font-noto-serif), serif" }}
                  >
                    {value}
                  </p>
                  <p className="mt-1 font-label text-[11px] font-bold uppercase tracking-widest text-[#3c475a]">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 bg-[#131b2e] px-5 py-4 text-white">
              <span className="font-label text-[11px] font-bold uppercase tracking-widest text-white/75">
                Status
              </span>
              <span className="font-label text-[11px] font-bold uppercase tracking-widest text-[#f0d48a]">
                Accepting Projects
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
