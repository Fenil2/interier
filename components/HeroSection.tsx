"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./animations/RevealText";

const heroStats = [
  { value: "500+", label: "Projects" },
  { value: "South India", label: "Presence" },
  { value: "100%", label: "Turnkey" },
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex items-center overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          alt="Fourwalls Interiors"
          src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="h-[115%] w-full object-cover animate-ken-burns"
          style={{ transformOrigin: "center" }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[#0d1420]/20" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-24"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-[52rem]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6"
          >
            <span className="eyebrow">Interiors &amp; Constructions · South India</span>
          </motion.div>

          <div className="mb-7 sm:mb-8">
            <RevealText
              text="Where Vision Meets Construction"
              as="h1"
              delay={0.5}
              wordDelay={0.08}
              className="text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem] text-white leading-[1.04] font-bold tracking-[-0.03em]"
            />
          </div>

          <motion.p
            className="mb-8 max-w-2xl text-base leading-relaxed text-[#e2e8f2] sm:mb-10 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Fourwalls Interiors &amp; Constructions brings your dream spaces to life
            with expert interior design and reliable construction solutions across
            South India.
          </motion.p>

          <motion.div
            className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:flex-wrap sm:gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-sm bg-[#e6c275] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#131b2e] shadow-xl sm:px-8"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 shimmer opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative">Get Free Consultation</span>
              <span className="material-symbols-outlined relative text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-white/55 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm sm:px-8"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6 sm:flex sm:flex-wrap sm:gap-12 sm:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {heroStats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + i * 0.12, duration: 0.6 }}
              >
                <p
                  className="text-xl font-bold text-[#e6c275] sm:text-2xl"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {value}
                </p>
                <p className="mt-1 text-xs font-label font-semibold uppercase tracking-[0.08em] text-white/80">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <span className="text-xs font-label font-semibold uppercase tracking-[0.08em] text-white/70">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="material-symbols-outlined text-xl text-white/70">keyboard_double_arrow_down</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
