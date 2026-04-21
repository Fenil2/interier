"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useMemo, useState } from "react";

type Typology = "All Projects" | "Residential" | "Commercial" | "Construction" | "Renovation";

type Project = {
  id: number;
  typology: Exclude<Typology, "All Projects">;
  src: string;
  alt: string;
  badge: string;
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
};

const filters: Typology[] = [
  "All Projects",
  "Residential",
  "Commercial",
  "Construction",
  "Renovation",
];

const projects: Project[] = [
  {
    id: 1,
    typology: "Residential",
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Luxury residential living room with warm neutral interiors",
    badge: "Residential / Private Villa",
    title: "The Limestone Residence",
    summary: "A warm family villa shaped around natural light, stone, oak joinery, and quiet everyday rituals.",
    meta: [{ label: "Footprint", value: "12,400 SQ FT" }, { label: "Finish", value: "Limestone + Oak" }],
  },
  {
    id: 2,
    typology: "Residential",
    src: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Modern apartment dining room with soft daylight",
    badge: "Residential / Apartment",
    title: "Oak Court Apartment",
    summary: "A compact city home planned for openness, storage discipline, and refined daily comfort.",
    meta: [{ label: "Footprint", value: "2,100 SQ FT" }, { label: "Scope", value: "Interiors" }],
  },
  {
    id: 3,
    typology: "Residential",
    src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Elegant residential bedroom with neutral palette",
    badge: "Residential / Master Suite",
    title: "Palm Grove Suite",
    summary: "A calm bedroom suite with layered textures, concealed storage, and hotel-like material detailing.",
    meta: [{ label: "Room", value: "Bedroom" }, { label: "Mood", value: "Soft Luxury" }],
  },
  {
    id: 4,
    typology: "Residential",
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Residential lounge with refined sofa and interior styling",
    badge: "Residential / Lounge",
    title: "Cedar House Lounge",
    summary: "A generous lounge composed for hosting, conversation, and long-lasting furniture comfort.",
    meta: [{ label: "Material", value: "Walnut" }, { label: "Palette", value: "Warm Neutral" }],
  },
  {
    id: 5,
    typology: "Residential",
    src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Residential kitchen and living interior with contemporary finishes",
    badge: "Residential / Open Plan",
    title: "Riverbend Home",
    summary: "An open living and kitchen plan with clean circulation, brighter sightlines, and family-first zoning.",
    meta: [{ label: "Zone", value: "Kitchen + Living" }, { label: "Scope", value: "Design Build" }],
  },
  {
    id: 6,
    typology: "Commercial",
    src: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Modern commercial lobby with refined seating and warm lighting",
    badge: "Commercial / Corporate Lobby",
    title: "Nexus HQ Lobby",
    summary: "A reception space with hospitality-level detail, clear circulation, and executive presence.",
    meta: [{ label: "Typology", value: "Office Lobby" }, { label: "Scope", value: "Design Build" }],
  },
  {
    id: 7,
    typology: "Commercial",
    src: "https://images.pexels.com/photos/7195806/pexels-photo-7195806.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Hospitality lounge interior with premium commercial ambience",
    badge: "Commercial / Hospitality",
    title: "Vesper Lounge",
    summary: "A high-touch hospitality setting with intimate seating, layered lighting, and durable luxury finishes.",
    meta: [{ label: "Capacity", value: "86 Guests" }, { label: "Finish", value: "Brass + Stone" }],
  },
  {
    id: 8,
    typology: "Commercial",
    src: "https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Commercial office interior with collaborative seating",
    badge: "Commercial / Workplace",
    title: "Atlas Workstudio",
    summary: "A flexible workplace that balances focus areas, collaboration, and client-facing meeting rooms.",
    meta: [{ label: "Seats", value: "120" }, { label: "Program", value: "Hybrid Office" }],
  },
  {
    id: 9,
    typology: "Commercial",
    src: "https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Retail interior with display lighting and refined finishes",
    badge: "Commercial / Retail",
    title: "Aster Retail Gallery",
    summary: "A boutique environment built for product storytelling, guided movement, and clean merchandising.",
    meta: [{ label: "Typology", value: "Retail" }, { label: "Area", value: "4,800 SQ FT" }],
  },
  {
    id: 10,
    typology: "Commercial",
    src: "https://images.pexels.com/photos/8146318/pexels-photo-8146318.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Elegant commercial dining interior with premium furniture",
    badge: "Commercial / Dining",
    title: "Sienna Dining Room",
    summary: "A refined restaurant interior with acoustic warmth, soft lighting, and efficient table flow.",
    meta: [{ label: "Covers", value: "72" }, { label: "Mood", value: "Evening Luxe" }],
  },
  {
    id: 11,
    typology: "Construction",
    src: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Construction project with clean architectural structure and concrete detail",
    badge: "Construction / Structure",
    title: "The Iron Frame",
    summary: "Civil execution with controlled sequencing, structural coordination, and material accountability.",
    meta: [{ label: "Scope", value: "Core + Shell" }, { label: "Phase", value: "Execution" }],
  },
  {
    id: 12,
    typology: "Construction",
    src: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Architectural construction site showing building execution",
    badge: "Construction / Villa Build",
    title: "Courtyard Shell",
    summary: "A residential build coordinated from excavation through structure, services, and finishing readiness.",
    meta: [{ label: "Scope", value: "Turnkey Build" }, { label: "Status", value: "Delivered" }],
  },
  {
    id: 13,
    typology: "Construction",
    src: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Building construction with workers and architectural framework",
    badge: "Construction / Site Works",
    title: "Monolith Works",
    summary: "A disciplined site program covering masonry, slab coordination, waterproofing, and service routes.",
    meta: [{ label: "Area", value: "18,000 SQ FT" }, { label: "Method", value: "Phased" }],
  },
  {
    id: 14,
    typology: "Construction",
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Construction crane and building structure during execution",
    badge: "Construction / Multi-Level",
    title: "Northline Structure",
    summary: "A multi-level structural package planned around safety, procurement timing, and daily quality checks.",
    meta: [{ label: "Levels", value: "G + 4" }, { label: "Scope", value: "Structural" }],
  },
  {
    id: 15,
    typology: "Construction",
    src: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Construction site materials and active building work",
    badge: "Construction / Turnkey",
    title: "Meridian Build",
    summary: "A turnkey delivery model with site supervision, vendor alignment, and practical handover discipline.",
    meta: [{ label: "Delivery", value: "Turnkey" }, { label: "QA", value: "Daily Logs" }],
  },
  {
    id: 16,
    typology: "Renovation",
    src: "https://images.pexels.com/photos/6782470/pexels-photo-6782470.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Renovated apartment lounge with elegant contemporary finishes",
    badge: "Renovation / Penthouse",
    title: "Penthouse IV",
    summary: "A dated apartment reworked into a brighter home with modern detailing and softer transitions.",
    meta: [{ label: "Scope", value: "Full Remodel" }, { label: "Timeline", value: "14 Weeks" }],
  },
  {
    id: 17,
    typology: "Renovation",
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Renovated bathroom interior with marble and modern fixtures",
    badge: "Renovation / Bath Suite",
    title: "Marble Reset",
    summary: "A wet-area renovation focused on waterproofing, stone detailing, and spa-like restraint.",
    meta: [{ label: "Scope", value: "Bath Remodel" }, { label: "Timeline", value: "6 Weeks" }],
  },
  {
    id: 18,
    typology: "Renovation",
    src: "https://images.pexels.com/photos/7535031/pexels-photo-7535031.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Renovated kitchen with contemporary cabinetry and bright surfaces",
    badge: "Renovation / Kitchen",
    title: "The Bright Kitchen",
    summary: "An older kitchen transformed with improved storage, better work zones, and cleaner material edges.",
    meta: [{ label: "Room", value: "Kitchen" }, { label: "Upgrade", value: "Storage" }],
  },
  {
    id: 19,
    typology: "Renovation",
    src: "https://images.pexels.com/photos/7195552/pexels-photo-7195552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Renovated living area with fresh interior finishes",
    badge: "Renovation / Living",
    title: "Banyan Refresh",
    summary: "A living-room refresh with improved lighting, reworked surfaces, and calmer furniture proportions.",
    meta: [{ label: "Scope", value: "Interior Refresh" }, { label: "Timeline", value: "8 Weeks" }],
  },
  {
    id: 20,
    typology: "Renovation",
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
    alt: "Renovated interior with modern finishes and warm lighting",
    badge: "Renovation / Full Home",
    title: "Madura Modernization",
    summary: "A whole-home renovation preserving the shell while upgrading finishes, services, and daily usability.",
    meta: [{ label: "Scope", value: "Whole Home" }, { label: "Status", value: "Completed" }],
  },
];

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.48, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.98,
    transition: { duration: 0.22 },
  },
};

function getCardLayout(index: number, total: number) {
  if (total === 5) {
    return index < 2 ? "lg:col-span-6" : "lg:col-span-4";
  }

  if (index % 10 === 0 || index % 10 === 6) return "lg:col-span-6";
  if (index % 10 === 1 || index % 10 === 7) return "lg:col-span-6";
  return "lg:col-span-4";
}

export default function PortfolioBentoGrid() {
  const [active, setActive] = useState<Typology>("All Projects");

  const visibleProjects = useMemo(
    () => projects.filter((project) => active === "All Projects" || project.typology === active),
    [active]
  );

  return (
    <section className="px-4 sm:px-8 max-w-[1440px] mx-auto">
      <div className="mb-10 md:mb-14 border-y border-outline-variant/20 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <span className="text-label-sm font-bold text-on-primary-fixed whitespace-nowrap">
            Filter By Typology:
          </span>
          <div className="flex gap-5 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const isActive = active === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`relative shrink-0 text-label-sm transition-colors duration-300 ${
                    isActive
                      ? "text-tertiary-fixed-dim"
                      : "text-on-secondary-fixed-variant hover:text-on-primary-fixed"
                  }`}
                >
                  {filter}
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-filter-underline"
                      className="absolute -bottom-2 left-0 h-px w-full bg-tertiary-fixed-dim"
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6"
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              variants={cardVariants}
              exit="exit"
              className={`${getCardLayout(index, visibleProjects.length)} group overflow-hidden rounded-md border border-[#131b2e]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f0ede9]">
                <motion.img
                  alt={project.alt}
                  src={project.src}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
