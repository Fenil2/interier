"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FadeIn from "./animations/FadeIn";

const testimonials = [
  {
    id: 1,
    quote: "Fourwalls transformed our home into exactly what we envisioned. Their team listened carefully, delivered on time, and the quality of work exceeded our expectations completely.",
    name: "Rajesh Kumar", role: "Homeowner, Chennai",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    quote: "The commercial interior they designed for our office is stunning. Professional execution, transparent pricing, and zero compromise on quality. Highly recommended across South India.",
    name: "Priya Nair", role: "Business Owner, Coimbatore",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    quote: "From modular kitchen to complete renovation, Fourwalls handled everything seamlessly. Their turnkey approach made the entire process stress-free and the results are beautiful.",
    name: "Suresh Babu", role: "Property Developer, Bangalore",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [carouselStart, setCarouselStart] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const visibleTestimonials = [0, 1].map(
    (offset) => (carouselStart + offset) % testimonials.length
  );

  const showPrevious = () => {
    setCarouselStart((current) => {
      const nextStart = (current - 1 + testimonials.length) % testimonials.length;
      setActive(nextStart);
      return nextStart;
    });
  };

  const showNext = () => {
    setCarouselStart((current) => {
      const nextStart = (current + 1) % testimonials.length;
      setActive(nextStart);
      return nextStart;
    });
  };

  return (
    <section id="testimonials" ref={ref} className="py-8 md:py-14 bg-[#f6f3ee] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-60" />

      {/* Decorative background quote */}
      <motion.div
        className="absolute left-4 top-4 text-[16rem] font-bold text-[#012c3d]/4 leading-none pointer-events-none select-none hidden xl:block"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        &ldquo;
      </motion.div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <FadeIn direction="up">
            <span className="eyebrow mb-3 block">What Our Clients Say</span>
            <h2 className="text-4xl md:text-5xl text-[#012c3d] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              Client Experiences
            </h2>
            <p className="mt-3 max-w-xl text-[#3c475a] leading-relaxed text-sm md:text-base">
              Our clients are at the heart of everything we do. Their satisfaction and trust motivate us to deliver better with every project.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <motion.a
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 text-[#3c475a] font-bold uppercase tracking-widest text-xs hover:text-[#01c1ff] transition-colors shrink-0 group"
              whileHover={{ x: 4 }}>
              Start Your Project
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </motion.a>
          </FadeIn>
        </div>

        {/* Active testimonial (large display) */}
        <div className="relative mb-8">
          <motion.div
            key={active}
            className="bg-white border border-[#012c3d]/6 rounded-sm p-6 md:p-10 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated top bar */}
            <motion.div
              className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#01c1ff] via-[#18d4cf] to-[#ffc309]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={active + "-bar"}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(1,193,255,0.08) 0%, transparent 70%)" }} />

            <motion.span
              className="material-symbols-outlined text-[#fa693a] text-5xl mb-5 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}
            >
              format_quote
            </motion.span>

            <p className="text-lg md:text-2xl text-[#012c3d] italic leading-relaxed mb-6 max-w-4xl"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>

            <div className="flex items-center gap-5">
              <motion.div
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#01c1ff]/40 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, ease: "backOut" }}
              >
                <img alt={testimonials[active].name} src={testimonials[active].avatar}
                  className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <p className="font-bold text-[#012c3d]">{testimonials[active].name}</p>
                <p className="text-xs font-label uppercase tracking-widest text-[#3c475a] mt-0.5">
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mini card carousel */}
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="hidden sm:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#012c3d]/10 bg-white text-[#012c3d] shadow-sm transition-colors hover:border-[#01c1ff]/60 hover:text-[#01c1ff]"
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </motion.button>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {visibleTestimonials.map((testimonialIndex) => {
              const t = testimonials[testimonialIndex];

              return (
                <motion.button
                  key={`${t.id}-${carouselStart}`}
                  type="button"
                  onClick={() => setActive(testimonialIndex)}
                  className={`min-h-[92px] text-left p-4 rounded-sm border transition-all duration-300 ${
                    testimonialIndex === active
                      ? "bg-[#012c3d] border-[#01c1ff]/30 shadow-xl"
                      : "bg-white border-[#012c3d]/8 hover:border-[#01c1ff]/40"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + testimonialIndex * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img alt={t.name} src={t.avatar}
                      className={`w-8 h-8 rounded-full object-cover ring-1 ${testimonialIndex === active ? "ring-[#01c1ff]/50" : "ring-[#012c3d]/10"}`}
                    />
                    <div className="min-w-0">
                      <p className={`truncate font-bold text-xs ${testimonialIndex === active ? "text-white" : "text-[#012c3d]"}`}>{t.name}</p>
                      <p className={`truncate text-[10px] uppercase tracking-widest ${testimonialIndex === active ? "text-white/50" : "text-[#3c475a]"}`}>{t.role}</p>
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${testimonialIndex === active ? "text-white/70" : "text-[#3c475a]"}`}>
                    {t.quote}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="hidden sm:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#012c3d]/10 bg-white text-[#012c3d] shadow-sm transition-colors hover:border-[#01c1ff]/60 hover:text-[#01c1ff]"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </motion.button>
        </div>

        <div className="mt-4 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#012c3d]/10 bg-white text-[#012c3d] shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#012c3d]/10 bg-white text-[#012c3d] shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
