"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companyLinks = [
  { label: "The Gallery",       href: "/portfolio" },
  { label: "Design Philosophy", href: "/about" },
  { label: "Services",          href: "/services" },
  { label: "Blog",              href: "/blog" },
];
const inquiryLinks = [
  { label: "Our Clients",           href: "/clients" },
  { label: "What Makes Us Different", href: "/difference" },
  { label: "Contact Us",            href: "/contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer ref={ref} className="bg-[#0d1420] w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />

      <motion.div
        className="absolute top-0 left-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, #e6c275, rgba(230,194,117,0.3), transparent)" }}
        initial={{ width: 0 }}
        animate={inView ? { width: "60%" } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,194,117,0.04) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-8 md:px-12 pt-20 pb-12 max-w-[1440px] mx-auto">
        <motion.div
          className="sm:col-span-2 lg:col-span-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.span
              className="material-symbols-outlined text-[#e6c275] text-[20px]"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >architecture</motion.span>
            <span className="text-xl uppercase tracking-[0.1em] text-white font-bold"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}>AURELIAN</span>
          </Link>
          <p className="text-[#5a6f87] text-sm leading-relaxed max-w-xs">
            Defining the intersection of architecture and soul through structural poise and material honesty.
          </p>
          <div className="flex gap-3">
            {["public", "camera", "mail"].map((icon, i) => (
              <motion.a key={icon} href="#"
                className="w-9 h-9 flex items-center justify-center rounded-sm bg-white/4 border border-white/8 group"
                whileHover={{ backgroundColor: "#e6c275", borderColor: "#e6c275", y: -3 }}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="material-symbols-outlined text-[18px] text-white/50 group-hover:text-[#131b2e] transition-colors">{icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}>
          <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Company</h5>
          <nav className="flex flex-col gap-3">
            {companyLinks.map(({ label, href }, i) => (
              <motion.div key={href}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07 }}>
                <Link href={href}
                  className="text-[#5a6f87] hover:text-[#e6c275] transition-colors text-sm flex items-center gap-2 group">
                  <motion.span className="w-0 h-px bg-[#e6c275] transition-all duration-300 group-hover:w-4" />
                  {label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        <motion.div className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}>
          <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Inquiries</h5>
          <nav className="flex flex-col gap-3">
            {inquiryLinks.map(({ label, href }, i) => (
              <motion.div key={href}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}>
                <Link href={href}
                  className="text-[#5a6f87] hover:text-[#e6c275] transition-colors text-sm flex items-center gap-2 group">
                  <motion.span className="w-0 h-px bg-[#e6c275] transition-all duration-300 group-hover:w-4" />
                  {label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        <motion.div className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}>
          <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">Studio Updates</h5>
          <p className="text-[#5a6f87] text-sm leading-relaxed">
            Subscribe for insights on architectural trends and our latest project reveals.
          </p>
          <div className="flex items-center border-b-2 border-white/15 py-2 focus-within:border-[#e6c275] transition-colors duration-300">
            <input type="email" placeholder="your@email.com"
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-white/20 text-white/80 outline-none" />
            <motion.button
              className="material-symbols-outlined text-lg text-white/35 hover:text-[#e6c275] transition-colors ml-2"
              whileHover={{ x: 3 }} whileTap={{ scale: 0.9 }}
            >arrow_forward</motion.button>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            {[{ icon: "call", text: "+91 (44) 2000 1000" }, { icon: "mail", text: "studio@aurelian.in" }].map(({ icon, text }) => (
              <div key={icon} className="flex items-center gap-3 text-[#5a6f87]">
                <span className="material-symbols-outlined text-[#e6c275] text-[16px]">{icon}</span>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative border-t border-white/6 px-6 sm:px-8 md:px-12 py-6 max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <p className="text-[11px] uppercase tracking-widest text-white/25 font-bold text-center sm:text-left">
          © 2024 Aurelian Collective · Built with Structural Poise
        </p>
        <div className="flex gap-6 text-[11px] uppercase tracking-widest font-bold">
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <a key={item} href="#" className="text-white/25 hover:text-[#e6c275] transition-colors duration-300">{item}</a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
