"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealText from "../animations/RevealText";
import FadeIn from "../animations/FadeIn";

export default function AboutHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="page-hero lg:min-h-[calc(100svh-12rem)] lg:flex lg:items-center">
      <div className="page-hero-grid w-full !items-center">
        {/* Left: heading */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow">Our Heritage</span>
          </motion.div>

          <RevealText
            text="The Soul of Structural Poise."
            as="h1"
            delay={0.25}
            wordDelay={0.08}
            className="page-hero-title"
          />

          <FadeIn direction="up" delay={0.7}>
            <p className="page-hero-copy">
              At Aurelian, we believe a building is not merely an assembly of
              materials, but a vessel for life&apos;s most profound moments. We
              build with the precision of a watchmaker and the soul of an artist.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.9}>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Precision Engineering", "Material Honesty", "Timeless Design"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 border border-[#131b2e]/15 text-[#3c475a] text-xs font-label uppercase tracking-widest rounded-sm bg-white/60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ borderColor: "#e6c275", color: "#131b2e", backgroundColor: "rgba(230,194,117,0.08)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: image + floating stat */}
        <FadeIn direction="right" delay={0.3} className="lg:col-span-5 relative">
          <motion.div
            className="absolute -top-4 right-0 h-[3px] bg-[#e6c275] origin-right"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ width: "4rem" }}
          />
          <div className="aspect-[4/5] max-h-[38rem] bg-surface-container-low rounded-sm overflow-hidden shadow-2xl">
            <motion.img
              alt="Interior architecture"
              src="https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1, filter: "grayscale(100%)" }}
              animate={inView ? { scale: 1, filter: "grayscale(0%)" } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04 }}
            />
          </div>
          {/* Floating stat card */}
          <motion.div
            className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 bg-[#131b2e] p-6 lg:p-8 shadow-2xl hidden md:block"
            initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="w-8 h-[2px] bg-[#e6c275] mb-4" />
            <span className="text-5xl font-bold text-[#e6c275] italic block"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>18</span>
            <span className="block font-label text-xs uppercase tracking-widest text-white/60 mt-2">
              Years of Mastery
            </span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
