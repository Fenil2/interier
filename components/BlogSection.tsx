"use client";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";

const blogPosts = [
  {
    id: 1,
    tag: "Interior Design",
    title: "Top 10 Interior Design Trends Dominating South India in 2025",
    excerpt:
      "From warm earth tones to maximalist textures, discover the styles reshaping residential and commercial interiors across South India this year.",
    src: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    tag: "Modular Solutions",
    title: "Why Modular Kitchens Are the Smart Choice for Modern Homes",
    excerpt:
      "Space efficiency, clean aesthetics, and long-term durability — here is why modular kitchen solutions are gaining popularity across Chennai and beyond.",
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    tag: "Construction",
    title: "Complete Guide to Turnkey Construction Projects",
    excerpt:
      "Understanding how end-to-end project execution saves time, reduces stress, and ensures consistent quality from design to final handover.",
    src: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1200",
    colSpan: "md:col-span-1",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-10 md:py-20 bg-white relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-50" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        <div className="mb-8 md:mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 block">Design Ideas &amp; Insights</span>
            <h2
              className="text-4xl md:text-5xl text-[#131b2e] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Design Ideas and Insights
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="max-w-sm text-[#3c475a] leading-relaxed text-sm md:text-base">
              Stay updated with the latest trends, tips, and ideas in interior
              design and construction.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.id} direction="up" delay={i * 0.15} className={post.colSpan}>
              <motion.div
                className="group bg-white border border-[#131b2e]/8 rounded-sm overflow-hidden shadow-sm flex flex-col h-full"
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 48px rgba(19,27,46,0.10)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={post.src}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute top-4 left-4 bg-[#e6c275] px-3 py-1 rounded-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#131b2e]">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3
                    className="text-lg font-bold text-[#131b2e] mb-3 leading-snug flex-1"
                    style={{ fontFamily: "var(--font-noto-serif), serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#3c475a] text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <motion.span
                    className="inline-flex items-center gap-2 text-[#131b2e] font-bold text-xs uppercase tracking-widest group-hover:text-[#e6c275] transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    Read More
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </motion.span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
