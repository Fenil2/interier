"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./animations/RevealText";
import FadeIn from "./animations/FadeIn";

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          alt="Final CTA Background"
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(19,27,46,0.97) 0%, rgba(19,27,46,0.90) 50%, rgba(13,20,32,0.97) 100%)"
        }} />
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
      </motion.div>

      {/* Animated corners */}
      {[
        "top-8 left-8 border-t-2 border-l-2",
        "top-8 right-8 border-t-2 border-r-2",
        "bottom-8 left-8 border-b-2 border-l-2",
        "bottom-8 right-8 border-b-2 border-r-2",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-12 h-12 border-[#e6c275]/35 z-10 pointer-events-none ${cls}`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "backOut" }}
        />
      ))}

      {/* Gold accent top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(90deg, transparent, #e6c275, transparent)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Floating orbs */}
      {[
        { size: "w-48 h-48", pos: "left-[5%] top-[15%]", delay: 0 },
        { size: "w-72 h-72", pos: "right-[8%] bottom-[10%]", delay: 2 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} ${orb.pos} rounded-full pointer-events-none z-[1]`}
          style={{ background: "radial-gradient(circle, rgba(230,194,117,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5 + i * 2, repeat: Infinity, delay: orb.delay }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center py-24">
        <FadeIn direction="up">
          <span className="eyebrow justify-center mb-8 block">Ready to Begin</span>
        </FadeIn>

        <div className="mb-8">
          <RevealText
            text="Let's Create Something"
            as="h2"
            delay={0.2}
            className="text-5xl md:text-6xl text-white font-bold leading-tight tracking-tight"
          />
          <div className="overflow-hidden">
            <motion.span
              className="block text-5xl md:text-6xl font-bold italic gradient-text-animate tracking-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Exceptional
            </motion.span>
          </div>
        </div>

        <FadeIn direction="up" delay={0.9}>
          <p className="text-[#9aa5b8] text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether it&apos;s a private estate or a cultural landmark, your vision
            deserves the precision of Aurelian.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={1.1}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#e6c275] text-[#131b2e] px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs relative overflow-hidden group"
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Start a Consultation</span>
              <span className="material-symbols-outlined text-[18px] relative transition-transform group-hover:translate-x-1">arrow_forward</span>
            </motion.a>
            <motion.a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs backdrop-blur-sm"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View Portfolio
            </motion.a>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn direction="up" delay={1.3}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 pt-10 border-t border-white/10">
            {[{ value: "150+", label: "Projects" }, { value: "20+", label: "Years" }, { value: "98%", label: "Retention" }, { value: "12", label: "Awards" }].map(({ value, label }, i) => (
              <motion.div key={label} className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + i * 0.1 }}>
                <p className="text-2xl font-bold text-[#e6c275]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}>{value}</p>
                <p className="text-white/50 text-[11px] uppercase tracking-widest font-label mt-0.5">{label}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
