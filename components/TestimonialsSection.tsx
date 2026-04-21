"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FadeIn from "./animations/FadeIn";

const testimonials = [
  {
    id: 1,
    quote: "Aurelian didn't just build us a house; they crafted a living sculpture. Their attention to the interplay of light and material is simply unmatched in the industry.",
    name: "David Thorne", role: "Founder, Thorne Ventures",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    quote: "The technical precision they brought to our commercial headquarters was astounding. They managed to make 50,000 square feet feel intimate and grounded.",
    name: "Sarah Jenkins", role: "Director, Alt-Design Group",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    quote: "Every conversation with their team felt like an exploration of possibilities. They have a rare ability to listen to what isn't being said and design for it.",
    name: "Julian Marcus", role: "Private Collector",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-36 bg-[#f6f3ee] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-60" />

      {/* Decorative background quote */}
      <motion.div
        className="absolute left-4 top-4 text-[16rem] font-bold text-[#131b2e]/4 leading-none pointer-events-none select-none hidden xl:block"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        &ldquo;
      </motion.div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <FadeIn direction="up">
            <span className="eyebrow mb-5 block">Kind Words</span>
            <h2 className="text-4xl md:text-5xl text-[#131b2e] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              Client Experiences
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <motion.a href="/clients"
              className="inline-flex items-center gap-3 text-[#3c475a] font-bold uppercase tracking-widest text-xs hover:text-[#e6c275] transition-colors shrink-0 group"
              whileHover={{ x: 4 }}>
              All Testimonials
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </motion.a>
          </FadeIn>
        </div>

        {/* Active testimonial (large display) */}
        <div className="relative mb-12">
          <motion.div
            key={active}
            className="bg-white border border-[#131b2e]/6 rounded-sm p-8 md:p-16 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated top bar */}
            <motion.div
              className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#e6c275] to-[#f5d78a]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={active + "-bar"}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(230,194,117,0.06) 0%, transparent 70%)" }} />

            <motion.span
              className="material-symbols-outlined text-[#e6c275] text-6xl mb-8 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}
            >
              format_quote
            </motion.span>

            <p className="text-xl md:text-3xl text-[#131b2e] italic leading-relaxed mb-10 max-w-4xl"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>

            <div className="flex items-center gap-5">
              <motion.div
                className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#e6c275]/40 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, ease: "backOut" }}
              >
                <img alt={testimonials[active].name} src={testimonials[active].avatar}
                  className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <p className="font-bold text-[#131b2e]">{testimonials[active].name}</p>
                <p className="text-xs font-label uppercase tracking-widest text-[#3c475a] mt-0.5">
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation dots + mini cards */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              className={`min-w-[220px] text-left p-5 rounded-sm border transition-all duration-300 flex-shrink-0 ${
                i === active
                  ? "bg-[#131b2e] border-[#e6c275]/30 shadow-xl"
                  : "bg-white border-[#131b2e]/8 hover:border-[#e6c275]/40"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img alt={t.name} src={t.avatar}
                  className={`w-8 h-8 rounded-full object-cover ring-1 ${i === active ? "ring-[#e6c275]/50" : "ring-[#131b2e]/10"}`}
                />
                <div>
                  <p className={`font-bold text-xs ${i === active ? "text-white" : "text-[#131b2e]"}`}>{t.name}</p>
                  <p className={`text-[10px] uppercase tracking-widest ${i === active ? "text-white/50" : "text-[#3c475a]"}`}>{t.role}</p>
                </div>
              </div>
              <p className={`text-xs leading-relaxed line-clamp-2 ${i === active ? "text-white/70" : "text-[#3c475a]"}`}>
                {t.quote}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
