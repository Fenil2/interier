import Image from "next/image";
import MotionReveal from "./MotionReveal";

type FooterColumn = [string, string[], string | string[]];

const footerColumns: FooterColumn[] = [
  ["Services", ["Interior Design", "Construction", "Modular Solutions", "Renovation", "Turnkey Projects"], "#services"],
  ["Company", ["About Us", "Portfolio", "Testimonials", "Blog", "Contact"], ["#about", "#projects", "#testimonials", "#blog", "#contact"]],
  ["Service Areas", ["Chennai", "Coimbatore", "Bangalore", "Hyderabad", "Madurai"], "#contact"]
];

export default function Footer() {
  return (
    <footer className="bg-[#021520] py-10 md:py-14">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:px-10">
        <MotionReveal>
          <div>
            <div className="mb-4 flex items-center">
              <div className="cinematic-panel flex h-20 w-20 items-center justify-center overflow-hidden rounded-[12px] bg-[#ffc309]">
                <Image src="/flourlogo.jpeg" alt="Fourwalls logo" width={80} height={80} className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="text-[0.9rem] font-light leading-[1.8] text-[#6d7f8f]">
              Fourwalls Interiors &amp; Constructions delivers high quality interior design and construction services across South India with a strong focus on creativity, durability, and customer satisfaction.
            </p>
          </div>
        </MotionReveal>

        {footerColumns.map(([title, links, hrefs], index) => (
          <MotionReveal key={title} delayMs={index * 100}>
            <div>
              <div className="mb-4 font-[var(--font-outfit)] text-[1rem] font-bold uppercase tracking-[0.14em] text-[#01c1ff]">
                {title}
              </div>
              <div className="flex flex-col gap-2">
                {links.map((link, linkIndex) => (
                  <a
                    key={link}
                    href={Array.isArray(hrefs) ? hrefs[linkIndex] : hrefs}
                    className="text-[0.88rem] text-[#6d7f8f] transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>

      <MotionReveal delayMs={140} className="mx-auto mt-10 flex max-w-[1280px] flex-col justify-between gap-3 border-t border-[#0b2b3d] px-5 pt-6 text-[0.82rem] text-[#536575] md:flex-row md:px-10">
        <p>
          Copyright 2025 <span className="text-[#01c1ff]">Fourwalls Interiors &amp; Constructions</span>. All rights reserved.
        </p>
        <p>Across South India</p>
      </MotionReveal>
    </footer>
  );
}
