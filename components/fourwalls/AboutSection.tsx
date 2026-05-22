import Image from "next/image";
import { metrics } from "./data";
import MotionReveal from "./MotionReveal";
import { Container, SectionHeading, SectionTag } from "./shared";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f5f3ee] py-10 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[5fr_7fr] md:gap-20">
          {/* Desktop: image in left column */}
          <div className="hidden md:contents">
            <MotionReveal variant="left" className="relative">
              <div className="relative pb-5 pr-5">
                <div className="cinematic-panel relative h-120 overflow-hidden rounded-[14px]">
                  <Image
                    src="/Gemini_Generated_Image_mteby4mteby4mteb.jpg"
                    alt="Fourwalls Interior Design Portfolio - Living Room with Tray Ceiling"
                    fill
                    className="cinematic-image object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c18104d] to-transparent to-[60%]" />
                </div>
                <div className="absolute -bottom-0 -right-0 z-10 flex h-[115px] w-[115px] flex-col items-center justify-center rounded-full bg-[#c8a856] shadow-[0_10px_35px_rgba(200,168,86,0.35)]">
                  <span className="font-(family-name:--font-outfit) text-[2.2rem] font-bold leading-none text-[#1a2e20]">500+</span>
                  <span className="px-2 text-center text-[0.62rem] font-bold tracking-[0.04em] text-[#1a2e20]">
                    Projects Done
                  </span>
                </div>
              </div>
            </MotionReveal>
          </div>

          <div>
            <MotionReveal>
              <SectionTag>Our Story</SectionTag>
            </MotionReveal>
            <MotionReveal delayMs={100}>
              <SectionHeading className="mb-6">
                Building Spaces
                <br />
                <em className="text-[#c8a856]">That Inspire</em>
              </SectionHeading>
            </MotionReveal>
            <MotionReveal delayMs={180}>
              <blockquote className="mb-6 rounded-r-[6px] border-l-[3px] border-[#c8a856] bg-[#c8a8560f] px-6 py-3 font-(family-name:--font-outfit) text-[1.3rem] italic leading-[1.5] text-[#1a2e20]">
                &quot;We believe in delivering not just spaces, but experiences that enhance the way people live and work.&quot;
              </blockquote>
            </MotionReveal>

            {/* Mobile: image between blockquote and paragraphs */}
            <MotionReveal delayMs={220} className="relative mb-8 md:hidden">
              <div className="relative pb-5 pr-5">
                <div className="cinematic-panel relative h-65 overflow-hidden rounded-[14px] sm:h-80">
                  <Image
                    src="/Gemini_Generated_Image_mteby4mteby4mteb.jpg"
                    alt="Fourwalls Interior Design Portfolio - Living Room with Tray Ceiling"
                    fill
                    className="cinematic-image object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0c18104d] to-transparent to-60%" />
                </div>
                <div className="absolute bottom-0 right-0 z-10 flex h-25 w-25 flex-col items-center justify-center rounded-full bg-[#c8a856] shadow-[0_10px_35px_rgba(200,168,86,0.35)]">
                  <span className="font-(family-name:--font-outfit) text-[1.9rem] font-bold leading-none text-[#1a2e20]">500+</span>
                  <span className="px-2 text-center text-[0.58rem] font-bold tracking-[0.04em] text-[#1a2e20]">
                    Projects Done
                  </span>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delayMs={260}>
              <p className="mb-4 text-[0.97rem] font-light leading-[1.88] text-[#1e2e22]">
                At Fourwalls Interiors &amp; Constructions, we specialize in creating functional, elegant, and
                long-lasting spaces. With over <strong>500+ successfully completed projects</strong>, we have built
                a strong reputation for delivering quality interiors and construction solutions across South India.
              </p>
            </MotionReveal>
            <MotionReveal delayMs={330}>
              <p className="text-[0.97rem] font-light leading-[1.88] text-[#1e2e22]">
                Our team combines creativity, technical expertise, and attention to detail to ensure every
                project meets high quality standards.
              </p>
            </MotionReveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {metrics.map(([number, label, color], index) => (
                <MotionReveal key={label} delayMs={400 + index * 90}>
                  <div className="cinematic-panel flex items-center gap-4 rounded-[14px] bg-[#1a2e20] px-6 py-5">
                    <span className="font-(family-name:--font-outfit) text-[1.8rem] font-bold leading-none" style={{ color }}>
                      {number}
                    </span>
                    <span className="text-[0.78rem] leading-[1.4] text-white/45">{label}</span>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
