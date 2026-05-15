import type { ReactNode } from "react";
import { progress } from "./data";
import { BoxIcon, ChatIcon, ClockIcon, StarIcon, SunIcon, UserIcon } from "./icons";
import MotionReveal from "./MotionReveal";
import { Button, BodyText, Container, SectionHeading, SectionTag } from "./shared";

type WhyCardItem = [string, string, string, string, ReactNode];

const cards: WhyCardItem[] = [
  ["Over 500 plus Projects Completed", "Proven experience with over 500 plus projects completed.", "#01c1ff", "bg-[#01c1ff1a]", <StarIcon key="star" />],
  ["Strong Presence Across South India", "Interior and construction solutions delivered across multiple cities in South India.", "#00dfd7", "bg-[#00dfd71a]", <UserIcon key="user" />],
  ["End to End Turnkey Solutions", "From concept to completion, we handle everything with professional execution.", "#ffc309", "bg-[#ffc3091a]", <BoxIcon key="box" />],
  ["Transparent Pricing and Execution", "We focus on delivering value through quality work and transparent execution.", "#f9693a", "bg-[#f9693a1a]", <SunIcon key="sun" />],
  ["Experienced Design and Construction Team", "Our team combines creativity, technical expertise, and attention to detail.", "#00dfd7", "bg-[#00dfd71a]", <ChatIcon key="chat" />],
  ["On Time Project Delivery", "Timely delivery and clear communication remain central to every project.", "#01c1ff", "bg-[#01c1ff1a]", <ClockIcon key="clock" />]
];

export default function WhySection() {
  return (
    <section id="why" className="bg-[#e8f6fc] py-10 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[4fr_8fr] md:gap-20">
          <div className="md:sticky md:top-[5.5rem] md:self-start">
            <MotionReveal>
              <SectionTag>Our Difference</SectionTag>
            </MotionReveal>
            <MotionReveal delayMs={100}>
              <SectionHeading className="mb-4">
                Why Choose <em className="text-[#01c1ff]">Fourwalls Interiors &amp; Constructions</em>
              </SectionHeading>
            </MotionReveal>
            <MotionReveal delayMs={180}>
              <BodyText className="mb-8">
                At Fourwalls Interiors &amp; Constructions, we focus on delivering value through quality work and professional execution.
              </BodyText>
            </MotionReveal>
            <MotionReveal delayMs={240}>
              <Button href="#contact">Get Free Consultation</Button>
            </MotionReveal>
            <MotionReveal delayMs={320}>
              <div className="mt-9 flex flex-col gap-[1.1rem] rounded-[14px] bg-[#012c3d] px-8 py-7">
                {progress.map(([label, value, color]) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="min-w-[80px] text-[0.68rem] text-white/40 sm:min-w-[120px] sm:text-[0.74rem]">{label}</span>
                    <div className="h-1 flex-1 overflow-hidden rounded-[2px] bg-white/10">
                      <div className="h-full rounded-[2px]" style={{ width: value, backgroundColor: color }} />
                    </div>
                    <span className="min-w-[34px] text-right text-[0.78rem] font-semibold" style={{ color }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {cards.map(([title, text, color, iconBg, icon], index) => (
              <MotionReveal
                key={title}
                delayMs={index * 80}
                className="cinematic-panel relative overflow-hidden rounded-[14px] border border-[#012c3d12] bg-white p-7 shadow-[0_2px_12px_rgba(1,44,61,0.04)] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: color }} />
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-[6px] ${iconBg}`}>{icon}</div>
                <h3 className="mb-2 font-[var(--font-outfit)] text-[1.05rem] font-bold text-[#012c3d]">{title}</h3>
                <p className="text-[0.83rem] font-light leading-[1.72] text-[#5f8a9f]">{text}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
