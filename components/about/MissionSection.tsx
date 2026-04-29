"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../animations/FadeIn";

export default function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-[#131b2e] py-16 md:py-24 px-4 sm:px-8 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />

      {/* Decorative triangle */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 L100 0 V100 H0Z" fill="white" />
        </svg>
      </div>

      {/* Animated gold top line */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#e6c275] to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "50%" } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Ambient orb */}
      <motion.div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,194,117,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left sidebar */}
          <FadeIn direction="left" className="lg:col-span-4 h-fit">
            <div className="border-l-2 border-[#e6c275]/40 pl-8">
              <h2 className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}>
                The Golden Standard
              </h2>
              <p className="font-body text-[#7a8fa8] leading-relaxed">
                To create spaces that transcend the ephemeral trends of the moment.
                We are committed to a materiality that ages with grace and a
                structural integrity that lasts generations.
              </p>
              <div className="mt-10 flex flex-col gap-5">
                {[
                  { label: "Excellence", desc: "Uncompromising quality in every project" },
                  { label: "Integrity",  desc: "Honest materials, honest craft" },
                  { label: "Legacy",     desc: "Spaces designed to endure" },
                ].map(({ label, desc }, i) => (
                  <motion.div
                    key={label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.12 }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#e6c275] mt-2 flex-shrink-0"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{label}</p>
                      <p className="text-[#7a8fa8] text-xs mt-0.5">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right editorial */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-8 flex flex-col justify-center">
            <span className="eyebrow mb-6 block">Our Mission</span>
            <motion.p
              className="editorial-text text-2xl lg:text-3xl italic leading-snug text-white/90"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Construction is the physical manifestation of intent. Every join,
              every stone, and every ray of light is considered part of a greater
              symphony. Our mission is to ensure that the silent language of
              architecture speaks clearly to those who inhabit it. We don&apos;t
              just build walls; we define horizons.
            </motion.p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
