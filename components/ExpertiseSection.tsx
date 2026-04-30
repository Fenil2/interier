"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import TiltCard from "./animations/TiltCard";
import FadeIn from "./animations/FadeIn";

type ServiceIcon = "interior" | "construction" | "kitchen" | "renovation" | "turnkey";

const serviceIcons: Record<ServiceIcon, ReactNode> = {
  interior: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
      <path d="M16 14h16l3 8H13l3-8Z" />
      <path d="M24 22v16" />
      <path d="M18 38h12" />
      <path d="M18 14V9h12v5" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
      <path d="M10 36h28" />
      <path d="M14 36V18l10-7 10 7v18" />
      <path d="M20 36V24h8v12" />
      <path d="M14 22h20" />
      <path d="M24 11v11" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
      <path d="M10 14h28v24H10z" />
      <path d="M10 22h28" />
      <path d="M19 22v16" />
      <path d="M29 22v16" />
      <path d="M17 14v-4h14v4" />
      <path d="M14 18h2" />
      <path d="M23 18h2" />
      <path d="M32 18h2" />
    </svg>
  ),
  renovation: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
      <path d="M13 35h22" />
      <path d="M16 35V18l8-6 8 6v17" />
      <path d="M20 35v-9h8v9" />
      <path d="M31 13l4-4 4 4-4 4" />
      <path d="M35 9v8" />
      <path d="M31 13h8" />
    </svg>
  ),
  turnkey: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8">
      <path d="M13 25a11 11 0 1 1 7 10.25" />
      <path d="M13 35h7v-7" />
      <path d="M23 23l4 4 8-9" />
      <path d="M12 12h8" />
      <path d="M12 16h5" />
    </svg>
  ),
};

const services = [
  {
    icon: "interior",
    title: "Interior Design",
    description:
      "We create customized interior designs that blend style, comfort, and functionality for residential and commercial spaces.",
    items: ["Customized Designs", "Residential Spaces", "Commercial Spaces"],
    accent: "from-[#e6c275]/80 to-[#f5d78a]/60",
  },
  {
    icon: "construction",
    title: "Construction Services",
    description:
      "We provide complete construction solutions from planning to execution with a focus on quality and durability.",
    items: ["Planning", "Execution", "Quality and Durability"],
    accent: "from-[#e6c275]/80 to-[#c9a84c]/60",
  },
  {
    icon: "kitchen",
    title: "Modular Solutions",
    description:
      "Modern kitchens, wardrobes, and storage solutions designed for efficient and stylish living.",
    items: ["Modern Kitchens", "Wardrobes", "Storage Solutions"],
    accent: "from-[#f5d78a]/80 to-[#e6c275]/60",
  },
  {
    icon: "renovation",
    title: "Renovation and Remodeling",
    description:
      "Upgrade your existing space with our renovation services that bring a fresh and modern look.",
    items: ["Space Upgrades", "Fresh Look", "Modern Updates"],
    accent: "from-[#e6c275]/80 to-[#f5d78a]/60",
  },
  {
    icon: "turnkey",
    title: "Turnkey Projects",
    description:
      "From concept to completion, we handle everything to deliver a hassle free experience.",
    items: ["Concept to Completion", "Complete Handling", "Hassle Free Experience"],
    accent: "from-[#f5d78a]/80 to-[#c9a84c]/60",
  },
];

export default function ExpertiseSection() {
  const headerRef = useRef(null);
  useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="services" className="py-10 md:py-20 bg-[#f0ede9] scroll-mt-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div
          ref={headerRef}
          className="mb-8 grid grid-cols-1 items-end gap-6 md:mb-16 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <FadeIn direction="left">
              <span className="eyebrow mb-5">Our Services</span>
              <h2
                className="text-[2.6rem] md:text-[4rem] leading-tight text-[#131b2e] font-bold tracking-tight"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Our Services
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-5 md:flex md:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <p className="max-w-md text-[#3c475a] leading-relaxed text-base md:text-lg">
                Interior design, construction, modular solutions, renovation,
                and turnkey project services tailored for stylish, functional,
                and durable spaces.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => (
            <FadeIn
              key={service.title}
              direction="up"
              delay={i * 0.15}
              className={`h-full lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
            >
              <TiltCard intensity={6} className="h-full">
                <motion.div
                  className="bg-white p-6 relative overflow-hidden border border-[#131b2e]/10 rounded-md h-full min-h-[390px] flex flex-col group shadow-sm"
                  whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(19,27,46,0.12)" }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${service.accent} transition-all duration-500`}
                  />

                  <div className="mb-10 flex items-center justify-between gap-5">
                    <motion.span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-[#131b2e] text-[#e6c275] shadow-[0_16px_34px_rgba(19,27,46,0.14)] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2.2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    >
                      {serviceIcons[service.icon as ServiceIcon]}
                    </motion.span>
                    <span
                      className="text-[3.75rem] font-bold leading-none text-[#ede8e1] select-none"
                      style={{ fontFamily: "var(--font-noto-serif), serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3
                      className="text-xl text-[#131b2e] font-bold mb-4 leading-snug"
                      style={{ fontFamily: "var(--font-noto-serif), serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[#3c475a] leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 border-t border-[#131b2e]/8 pt-6">
                    {service.items.map((item, j) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3 text-[0.72rem] font-label uppercase tracking-widest text-[#3c475a]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * j }}
                      >
                        <motion.span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e6c275] flex-shrink-0"
                          whileHover={{ scale: 2 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.5} className="mt-12 flex items-center justify-center">
          <motion.a
            href="#contact"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#131b2e] px-7 py-4 font-label text-xs font-bold uppercase tracking-widest text-[#e6c275] transition-colors hover:bg-[#1e2d48]"
            whileHover={{ scale: 1.03, backgroundColor: "#131b2e", color: "#fff" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            Get Free Consultation
            <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
