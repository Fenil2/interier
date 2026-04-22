"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../animations/FadeIn";
import RevealText from "../animations/RevealText";

const contactLinks = [
  { href: "tel:+914420001000", icon: "call", label: "+91 (44) 2000 1000" },
  { href: "mailto:studio@aurelian.in", icon: "mail", label: "studio@aurelian.in" },
];

export default function ContactHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="page-hero">
      <div className="page-hero-grid">
        <FadeIn direction="left" className="md:col-span-7">
          <span className="eyebrow">Established in Chennai</span>
          <RevealText
            text="Connect with Excellence"
            as="h1"
            delay={0.3}
            wordDelay={0.07}
            className="page-hero-title"
          />
          <p className="page-hero-copy">
            At Aurelian, we don&apos;t just build spaces; we curate legacies.
            Whether you&apos;re envisioning a private estate in Ooty or a modern
            high-rise in Chennai, our team is ready to translate your
            aspirations into structural reality.
          </p>

          {/* Contact info row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-8 pt-8 border-t border-[#131b2e]/10">
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-[#131b2e] hover:text-[#e6c275] transition-colors font-semibold text-sm"
                initial={{ opacity: 0, x: -18 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.78 + index * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <span className="material-symbols-outlined text-[18px] text-[#e6c275]">{item.icon}</span>
                {item.label}
              </motion.a>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2} className="md:col-span-5 lg:col-span-4 lg:col-start-9">
          <div className="relative overflow-hidden rounded-sm group shadow-xl">
            <img
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Premium architectural materials"
              className="w-full h-72 sm:h-80 md:h-[26rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/80 via-[#131b2e]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-label text-[10px] uppercase tracking-widest text-[#e6c275] mb-1">
                Materiality Focus
              </p>
              <p
                className="italic text-xl text-white leading-tight"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Refining the Essence
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
