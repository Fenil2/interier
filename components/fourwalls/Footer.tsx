import Image from "next/image";
import Link from "next/link";
import MotionReveal from "./MotionReveal";

type FooterColumn = [string, string[], string | string[]];

const footerColumns: FooterColumn[] = [
  ["Services", ["Interior Design", "Construction", "Modular Solutions", "Renovation", "Turnkey Projects"], "#services"],
  ["Company", ["About Us", "Portfolio", "Testimonials", "Blog", "Contact"], ["#about", "#projects", "#testimonials", "#blog", "#contact"]],
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1410] py-8 md:py-10">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:px-10">

        {/* Logo + Description */}
        <MotionReveal>
          <div>
            <div className="mb-4 flex items-center">
              <div className="cinematic-panel flex h-20 w-20 items-center justify-center overflow-hidden rounded-[12px] bg-[#c8a856]">
                <Image src="/flourlogo.jpeg" alt="Fourwalls logo" width={80} height={80} className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="text-[0.9rem] font-light leading-[1.8] text-[#5e7868]">
              Premium interior design and construction services across South India — creativity, durability, and customer satisfaction.
            </p>
          </div>
        </MotionReveal>

        {/* Services + Company columns */}
        {footerColumns.map(([title, links, hrefs], index) => (
          <MotionReveal key={title} delayMs={index * 100}>
            <div>
              <div className="mb-4 font-(family-name:--font-outfit) text-[1rem] font-bold uppercase tracking-[0.14em] text-[#c8a856]">
                {title}
              </div>
              <div className="flex flex-col gap-2">
                {links.map((link, linkIndex) => (
                  <a
                    key={link}
                    href={Array.isArray(hrefs) ? hrefs[linkIndex] : hrefs}
                    className="text-[0.88rem] text-[#5e7868] transition-colors duration-200 hover:text-[#c8a856]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </MotionReveal>
        ))}

        {/* Address column — replaces Service Areas */}
        <MotionReveal delayMs={200}>
          <div>
            <div className="mb-4 font-(family-name:--font-outfit) text-[1rem] font-bold uppercase tracking-[0.14em] text-[#c8a856]">
              Contact Us
            </div>
            <div className="flex flex-col gap-3 text-[0.88rem] leading-[1.7] text-[#5e7868]">
              <div>
                <p className="mb-0.5 text-[0.75rem] font-semibold uppercase tracking-widest text-[#c8a856]/70">Address</p>
                <p>#2/801, ISHA COMPLEX,<br />Mambakkam, Chennai 600127</p>
              </div>
              <div>
                <p className="mb-0.5 text-[0.75rem] font-semibold uppercase tracking-widest text-[#c8a856]/70">Phone</p>
                <p>+91 9994095771</p>
                <p>+91 7010171817</p>
              </div>
              <div>
                <p className="mb-0.5 text-[0.75rem] font-semibold uppercase tracking-widest text-[#c8a856]/70">Email</p>
                <a href="mailto:shyam.fourwalls@gmail.com" className="transition-colors duration-200 hover:text-[#c8a856]">
                  shyam.fourwalls@gmail.com
                </a>
              </div>
            </div>
          </div>
        </MotionReveal>

      </div>

      <MotionReveal delayMs={140} className="mx-auto mt-6 flex max-w-[1280px] flex-col justify-between gap-2 border-t border-[#1e3824] px-5 pt-4 text-[0.82rem] text-[#4e6858] md:flex-row md:px-10">
        <p>
          Copyright 2025 <span className="text-[#c8a856]">Fourwalls Interiors &amp; Constructions</span>. All rights reserved.
        </p>
        <p className="flex items-center gap-3">
          <Link href="/privacy-policy" className="transition-colors hover:text-[#c8a856]">Privacy Policy</Link>
          <span>·</span>
          <span>Chennai, South India</span>
        </p>
      </MotionReveal>
    </footer>
  );
}
