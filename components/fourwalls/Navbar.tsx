"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "./data";
import { Container } from "./shared";

const dotColors = ["#ffc309", "#01c1ff", "#00dfd7", "#f9693a", "#ffc309", "#01c1ff"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      id="sitenav"
      className={`fixed left-0 right-0 top-0 z-[998] bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_28px_rgba(1,44,61,0.10)] border-b border-[#012c3d0c]"
          : "border-b border-[#012c3d0a]"
      }`}
    >
      <Container className="flex h-[60px] items-center justify-between md:h-[88px]">

        {/* Logo + Brand */}
        <a href="#home" className="group flex items-center gap-3 no-underline">
          <div className="relative h-[58px] w-[58px] shrink-0">
            <Image
              src="/flour.png"
              alt="Fourwalls logo"
              width={58}
              height={58}
              className="h-full w-full object-contain drop-shadow-sm"
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="font-[var(--font-outfit)] text-[0.88rem] font-bold leading-none tracking-[0.14em] text-[#012c3d]">
              FOURWALLS
            </span>
            <span className="mt-[4px] text-[0.55rem] font-light uppercase tracking-[0.18em] text-[#5f8a9f]">
              Interiors &amp; Constructions
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden list-none items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative flex items-center rounded-[6px] px-[0.9rem] py-[0.48rem] text-[0.8rem] font-semibold tracking-wider text-[#012c3d] transition-colors duration-200 hover:text-[#01c1ff]"
              >
                {link.label}
                <span className="absolute bottom-[3px] left-[0.9rem] right-[0.9rem] h-[1.5px] origin-left scale-x-0 rounded-full bg-[#ffc309] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-3">

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-[8px] bg-[#ffc309] px-6 py-[0.6rem] text-[0.8rem] font-bold tracking-[0.05em] text-[#012c3d] shadow-[0_4px_18px_rgba(255,195,9,0.32)] transition-all duration-300 hover:bg-[#ffd640] hover:shadow-[0_6px_28px_rgba(255,195,9,0.5)] lg:inline-flex"
          >
            Free Consultation
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
              <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="#012c3d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Mobile CTA */}
          <a
            href="#contact"
            className="rounded-[7px] bg-[#ffc309] px-4 py-[0.48rem] text-[0.74rem] font-bold tracking-[0.04em] text-[#012c3d] lg:hidden"
          >
            Consult
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="relative flex h-[36px] w-[36px] flex-col items-center justify-center gap-[5px] rounded-[8px] border border-[#012c3d14] bg-[#012c3d06] transition-colors duration-200 hover:bg-[#012c3d0e] lg:hidden"
          >
            <span className={`block h-[1.5px] w-[18px] rounded-full bg-[#012c3d] transition-all duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-[18px] rounded-full bg-[#012c3d] transition-all duration-200 ${mobileOpen ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-[18px] rounded-full bg-[#012c3d] transition-all duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </Container>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`overflow-hidden border-t border-[#012c3d0a] transition-all duration-500 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-5 pb-7 pt-5 shadow-[0_8px_32px_rgba(1,44,61,0.08)]">
          <ul className="mb-5 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-[9px] px-4 py-[0.7rem] text-[0.86rem] font-medium text-[#1e4a5c]/60 transition-all duration-200 hover:bg-[#012c3d05] hover:text-[#012c3d]"
                >
                  <span
                    className="h-[5px] w-[5px] flex-shrink-0 rounded-full"
                    style={{ background: dotColors[i] }}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mb-5 h-px bg-gradient-to-r from-transparent via-[#012c3d12] to-transparent" />
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#ffc309] py-3.5 text-[0.84rem] font-bold tracking-[0.06em] text-[#012c3d] shadow-[0_4px_18px_rgba(255,195,9,0.28)]"
          >
            Get Free Consultation
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="#012c3d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
