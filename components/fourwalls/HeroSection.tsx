import Image from "next/image";
import { heroMosaic, stats } from "./data";
import MotionReveal from "./MotionReveal";
import { Button, Container } from "./shared";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden bg-[#012c3d] pt-15 md:pt-22">
      <div className="hero-orb hero-orb--slow pointer-events-none absolute -right-[200px] -top-[200px] h-[700px] w-[700px] rounded-full border border-[#01c1ff12]" />
      <div className="hero-orb pointer-events-none absolute right-[50px] top-[-50px] h-[450px] w-[450px] rounded-full border border-[#00dfd70d]" />
      <div className="hero-orb hero-orb--fast pointer-events-none absolute right-[220px] top-[180px] h-[200px] w-[200px] rounded-full border border-[#ffc30914]" />

      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 md:px-14 lg:px-21">
          <div className="grid items-center gap-8 py-10 md:grid-cols-[41%_59%] md:gap-10 md:py-16 lg:gap-8">
            <div>
              <MotionReveal delayMs={40}>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f9693a38] bg-[#f9693a1a] px-4 py-[0.38rem] text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#f9693a]">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#f9693a] animate-[pulse_2s_infinite]" />
                  South India&apos;s Trusted Design Studio
                </div>
              </MotionReveal>
              <MotionReveal delayMs={150}>
                <h1 className="mb-6 font-[var(--font-outfit)] text-[clamp(3rem,4.8vw,5.2rem)] font-bold leading-[1.08] text-white">
                  <span className="block">Where Vision</span>
                  <span className="block text-[#01c1ff]">Meets</span>
                  <span className="block italic text-[#ffc309]">Construction</span>
                </h1>
              </MotionReveal>
              <MotionReveal delayMs={260}>
                <p className="mb-8 max-w-107.5 text-base font-light leading-[1.85] text-white/50">
                  Fourwalls Interiors &amp; Constructions brings your dream spaces to life with expert interior
                  design and reliable construction solutions across South India.
                </p>
              </MotionReveal>

              {/* Mosaic — mobile only (between paragraph and buttons) */}
              <div className="mb-8 md:hidden">
                <div className="grid grid-cols-[3fr_2fr] grid-rows-[190px_150px] gap-2 sm:grid-rows-[230px_180px]">
                  {heroMosaic.map((item, index) => (
                    <MotionReveal
                      key={item.title}
                      variant="zoom"
                      delayMs={260 + index * 120}
                      className={`cinematic-panel relative overflow-hidden rounded-[14px] ${item.className ?? ""}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="cinematic-image object-cover transition-transform duration-700"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#011018a6] to-transparent to-55%" />
                      <span className="absolute bottom-4 left-5 font-(--font-outfit) text-[0.85rem] italic text-white/70">
                        {item.title}
                      </span>
                    </MotionReveal>
                  ))}
                </div>
              </div>

              <MotionReveal delayMs={360}>
                <div className="flex flex-wrap gap-4">
                  <Button href="#contact">Get Free Consultation</Button>
                  <Button href="#projects" variant="ghostLight">
                    View Our Projects
                  </Button>
                </div>
              </MotionReveal>
            </div>

            {/* Mosaic — desktop only (right column) */}
            <MotionReveal variant="right" delayMs={180} className="hidden md:block">
              <div className="grid grid-cols-[3fr_2fr] grid-rows-[260px_200px] gap-2.5 pr-5 lg:pr-8">
                {heroMosaic.map((item, index) => (
                  <MotionReveal
                    key={item.title}
                    variant="zoom"
                    delayMs={260 + index * 120}
                    className={`cinematic-panel relative overflow-hidden rounded-[14px] ${item.className ?? ""}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="cinematic-image object-cover transition-transform duration-700"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#011018a6] to-transparent to-55%" />
                    <span className="absolute bottom-4 left-5 font-(--font-outfit) text-[0.85rem] italic text-white/70">
                      {item.title}
                    </span>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="relative overflow-hidden border-t border-white/[0.05] bg-gradient-to-b from-[#011a27] to-[#010d18]">
        {/* Top gold glow line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffc30960] to-transparent" />

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map(([number, label, sub], index) => {
              const accents = ["#ffc309", "#01c1ff", "#00dfd7"];
              const accent = accents[index] ?? "#ffc309";
              return (
                <MotionReveal
                  key={label}
                  delayMs={index * 140}
                  className={`group relative ${
                    index < stats.length - 1
                      ? "border-b border-white/[0.06] md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  {/* Ambient glow */}
                  <div
                    className="pointer-events-none absolute left-0 top-1/2 h-24 w-32 -translate-y-1/2 rounded-full opacity-[0.07] blur-2xl"
                    style={{ background: accent }}
                  />

                  {/* Mobile: full-width color line at bottom | Desktop: hidden */}
                  <div
                    className="absolute bottom-0 -left-5 -right-5 h-0.75 md:hidden"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent} 20%, ${accent} 80%, transparent)` }}
                  />

                  {/* Content */}
                  <div
                    className="flex h-full flex-col items-center justify-center gap-1.5 px-4 py-7 text-center md:items-start md:gap-[0.35rem] md:border-l-[3px] md:px-10 md:py-8 md:text-left"
                    style={{ borderLeftColor: accent }}
                  >
                    {/* Number */}
                    <div
                      className="text-[2.2rem] font-bold leading-none sm:text-[2.4rem] md:text-[2.6rem] md:leading-[1.05]"
                      style={{ color: accent, textShadow: `0 0 36px ${accent}44` }}
                    >
                      {number}
                    </div>

                    {/* Label */}
                    <div
                      className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] md:tracking-[0.22em]"
                      style={{ color: accent }}
                    >
                      {label}
                    </div>

                    {/* Sub */}
                    <div className="text-[0.7rem] font-light leading-snug text-white/35 md:text-[0.74rem]">
                      {sub}
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
