"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companyLinks = [
  { label: "About Us",        href: "#about" },
  { label: "Our Services",    href: "#services" },
  { label: "Why Choose Us",   href: "#why-us" },
  { label: "Our Projects",    href: "#projects" },
  { label: "Blog",            href: "#blog" },
];

const inquiryLinks = [
  { label: "Testimonials",   href: "#testimonials" },
  { label: "Contact Us",     href: "#contact" },
];

const socialLinks = [
  { icon: "photo_camera", label: "Instagram",  href: "#" },
  { icon: "groups",       label: "Facebook",   href: "#" },
  { icon: "work",         label: "LinkedIn",   href: "#" },
  { icon: "smart_display",label: "YouTube",    href: "#" },
];

const scrollTo = (id: string) => {
  document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer ref={ref} className="bg-[#012c3d] w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none opacity-20" />

      <motion.div
        className="absolute top-0 left-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #01c1ff, rgba(1,193,255,0.35), transparent)",
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: "60%" } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(24,212,207,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-8 md:px-12 pt-16 pb-10 max-w-[1440px] mx-auto">
        <motion.div
          className="sm:col-span-2 lg:col-span-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center group"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              className="shrink-0"
            >
              <Image
                src="/flourlogo.jpeg"
                alt="Flour Logo"
                width={1000}
                height={1000}
                className="h-16 w-auto sm:h-[72px]"
                sizes="(max-width: 640px) 64px, 72px"
              />
            </motion.div>
          </a>
          <p className="text-[#d0d8e6] text-sm leading-relaxed max-w-xs">
            Fourwalls Interiors &amp; Constructions delivers high quality interior
            design and construction services across South India with a strong focus
            on creativity, durability, and customer satisfaction.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ icon, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-sm bg-white/4 border border-white/15 group"
                whileHover={{
                  backgroundColor: "#01c1ff",
                  borderColor: "#01c1ff",
                  y: -3,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="material-symbols-outlined text-[18px] text-white/80 group-hover:text-[#012c3d] transition-colors">
                  {icon}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h5 className="text-sm uppercase tracking-[0.1em] font-bold text-white">
            Company
          </h5>
          <nav className="flex flex-col gap-3">
            {companyLinks.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07 }}
              >
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className="text-[#d0d8e6] hover:text-[#01c1ff] transition-colors text-sm font-medium flex items-center gap-2 group"
                >
                  <motion.span className="w-0 h-px bg-[#01c1ff] transition-all duration-300 group-hover:w-4" />
                  {label}
                </a>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h5 className="text-sm uppercase tracking-[0.1em] font-bold text-white">
            Inquiries
          </h5>
          <nav className="flex flex-col gap-3">
            {inquiryLinks.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className="text-[#d0d8e6] hover:text-[#01c1ff] transition-colors text-sm font-medium flex items-center gap-2 group"
                >
                  <motion.span className="w-0 h-px bg-[#01c1ff] transition-all duration-300 group-hover:w-4" />
                  {label}
                </a>
              </motion.div>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            {[
              { icon: "call",          text: "+91 99940 95771" },
              { icon: "location_on",   text: "Isha Complex, 2/801, Mambakkam - Medavakkam Main Rd, near to Sbioa Unity Enclave, Mambakkam, Tamil Nadu 600127" },
            ].map(({ icon, text }) => (
              <div key={icon} className="flex items-center gap-3 text-[#d0d8e6]">
                <span className="material-symbols-outlined text-[#ffc309] text-[16px]">
                  {icon}
                </span>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h5 className="text-sm uppercase tracking-[0.1em] font-bold text-white">
            Stay Updated
          </h5>
          <p className="text-[#d0d8e6] text-sm leading-relaxed">
            Subscribe for the latest design trends, project reveals, and construction
            insights from our team.
          </p>
          <div className="flex items-center border-b-2 border-white/25 py-2 focus-within:border-[#01c1ff] transition-colors duration-300">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-white/50 text-white outline-none"
            />
            <motion.button
              className="material-symbols-outlined text-lg text-white/80 hover:text-[#01c1ff] transition-colors ml-2"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Subscribe"
            >
              arrow_forward
            </motion.button>
          </div>
          <div className="pt-2">
            <p className="text-[#d0d8e6] text-xs leading-relaxed">
              Visit us at our Mambakkam studio for interior and construction consultations.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative border-t border-white/15 px-6 sm:px-8 md:px-12 py-6 max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.08em] text-white/70 font-bold text-center sm:text-left">
          &copy; 2025 Fourwalls Interiors &amp; Constructions &middot; South India
        </p>
        <div className="flex gap-6 text-xs uppercase tracking-[0.08em] font-bold">
          <Link
            href="/privacy-policy"
            className="text-white/70 hover:text-[#01c1ff] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <a
            href="#"
            className="text-white/70 hover:text-[#01c1ff] transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
