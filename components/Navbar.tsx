"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Why Us",       href: "#why-us" },
  { label: "Projects",     href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog",         href: "#blog" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#012c3d]/95 backdrop-blur-xl border-b border-[#01c1ff]/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-[#fcf9f4]/95 backdrop-blur-md border-b border-[#012c3d]/8 shadow-[0_2px_24px_rgba(1,44,61,0.08)]"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-[1440px] mx-auto">
          <a href="#" className="flex items-center shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-12 w-[130px] sm:h-14 sm:w-[150px]"
            >
              <Image
                src="/flourlogo.jpeg"
                alt="Flour Logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 130px, 150px"
                priority
              />
            </motion.div>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(({ label, href }, i) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className={`relative text-[0.95rem] font-semibold transition-colors duration-300 group pb-1 ${
                      isActive
                        ? scrolled ? "text-[#01c1ff]" : "text-[#012c3d]"
                        : scrolled ? "text-white/85 hover:text-[#ffc309]" : "text-[#2f3e54] hover:text-[#012c3d]"
                    }`}
                  >
                    {label}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-[2px] bg-[#01c1ff] rounded-full"
                      initial={{ width: isActive ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
              >
                <motion.span
                  className={`hidden md:inline-flex min-h-11 items-center gap-2 px-5 py-2.5 rounded-sm font-bold text-[0.8rem] uppercase tracking-[0.08em] transition-colors duration-500 ${
                    scrolled
                      ? "bg-[#ffc309] text-[#012c3d] hover:bg-[#fa693a]"
                      : "bg-[#012c3d] text-[#01c1ff] hover:bg-[#02364b]"
                  }`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Free Consultation
                </motion.span>
              </a>
            </motion.div>
            <motion.button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-sm transition-colors ${
                scrolled ? "hover:bg-white/10" : "hover:bg-[#f0ede9]"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={open ? "close" : "menu"}
                  className={`material-symbols-outlined text-2xl ${scrolled ? "text-white" : "text-[#012c3d]"}`}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? "close" : "menu"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#012c3d] flex flex-col lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-dot-pattern-light opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#01c1ff] via-[#18d4cf] to-transparent" />

            <div className="h-[72px] shrink-0" />
            <nav className="relative flex flex-col px-6 sm:px-8 overflow-y-auto divide-y divide-white/6">
              {navLinks.map(({ label, href }, i) => {
                const isActive = activeSection === href.replace("#", "");
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={href}
                      onClick={(e) => handleClick(e, href)}
                      className={`flex items-center justify-between py-5 text-2xl font-bold tracking-tight transition-colors duration-200 ${
                        isActive ? "text-[#01c1ff]" : "text-white hover:text-[#ffc309]"
                      }`}
                      style={{ fontFamily: "var(--font-noto-serif), serif" }}
                    >
                      {label}
                      <span className="material-symbols-outlined text-xl opacity-30">arrow_forward</span>
                    </a>
                  </motion.div>
                );
              })}
            </nav>
            <motion.div
              className="relative px-6 sm:px-8 mt-auto py-10 border-t border-white/8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
              >
                <motion.span
                  className="block w-full text-center bg-[#ffc309] text-[#012c3d] px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Free Consultation
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
