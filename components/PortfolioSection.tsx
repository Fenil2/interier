"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./animations/FadeIn";

const portfolioItems = [
  {
    id: 1, colSpan: "md:col-span-8", height: "md:h-[600px]",
    aspect: "aspect-video md:aspect-auto",
    src: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "The Monolith Residence", category: "Residential • 2023", title: "The Monolith Residence",
    meta: [{ label: "Area", value: "4,500 SQFT" }, { label: "Location", value: "ASPEN, CO" }, { label: "Phase", value: "COMPLETED" }],
    overlayPadding: "p-10", titleSize: "text-3xl", showMeta: true,
  },
  {
    id: 2, colSpan: "md:col-span-4", height: "md:h-[600px]",
    aspect: "aspect-square md:aspect-auto",
    src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Azure Sky Terrace", category: "Hospitality • 2024", title: "Azure Sky Terrace",
    meta: [], overlayPadding: "p-8", titleSize: "text-xl", showMeta: false,
  },
  {
    id: 3, colSpan: "md:col-span-4", height: "",
    aspect: "aspect-square",
    src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Industrial Atelier", category: "Commercial • 2023", title: "Industrial Atelier",
    meta: [], overlayPadding: "p-8", titleSize: "text-xl", showMeta: false,
  },
  {
    id: 4, colSpan: "md:col-span-8", height: "",
    aspect: "aspect-square md:aspect-[2/1]",
    src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Obsidian Kitchen Concept", category: "Interiors • 2024", title: "Obsidian Kitchen Concept",
    meta: [], overlayPadding: "p-10", titleSize: "text-3xl", showMeta: false,
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-diagonal-pattern pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <FadeIn direction="up">
            <span className="eyebrow mb-5 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl text-[#131b2e] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>
              Our Recent Works
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <motion.a
              href="/portfolio"
              className="inline-flex items-center gap-3 text-[#131b2e] font-bold uppercase tracking-widest text-xs border-b border-[#e6c275] pb-1 shrink-0 group"
              whileHover={{ x: 4 }}
            >
              Explore Full Gallery
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </motion.a>
          </FadeIn>
        </div>

        {/* Grid */}
        <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${item.colSpan} ${item.height} ${item.aspect} group relative overflow-hidden rounded-sm cursor-pointer shadow-md`}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ zIndex: 10 }}
            >
              <motion.img
                alt={item.alt}
                src={item.src}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Always-visible badge */}
              <motion.div
                className="absolute top-4 left-4 glass-dark px-3 py-1.5 rounded-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-[#e6c275] font-label text-[10px] uppercase tracking-widest">
                  {item.category}
                </span>
              </motion.div>

              {/* Hover overlay */}
              <motion.div
                className={`absolute inset-0 flex flex-col justify-end ${item.overlayPadding}`}
                style={{ background: "linear-gradient(to top, rgba(19,27,46,0.92) 0%, rgba(19,27,46,0.4) 50%, transparent 100%)" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.h4
                  className={`text-white font-bold mb-4 ${item.titleSize}`}
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                  initial={{ y: 16, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                >
                  {item.title}
                </motion.h4>
                {item.showMeta && item.meta.length > 0 && (
                  <motion.div
                    className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                  >
                    {item.meta.map((m) => (
                      <div key={m.label}>
                        <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-1">{m.label}</p>
                        <p className="text-white text-sm font-label font-semibold">{m.value}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
                {!item.showMeta && (
                  <motion.div
                    className="flex items-center gap-2 text-[#e6c275] text-xs font-label uppercase tracking-widest"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                  >
                    View Project
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
