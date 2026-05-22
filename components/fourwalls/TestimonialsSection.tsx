"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GoogleIcon } from "./icons";
import MotionReveal from "./MotionReveal";
import { BodyText, Container, SectionHeading, SectionTag } from "./shared";

type TestimonialItem = [string, string, string, string, string];

const testimonials: TestimonialItem[] = [
  ["KT", "Kishore Thadiboyina", "Chennai", "#c8a856",
    "Wonderful interior design!! Mr Shyam is a nice person to believe in."],
  ["PP", "Padma Priya", "Chennai", "#c8a856",
    "Had a good experience. Neat and clean work."],
  ["PB", "Priya Bhalaji", "Chennai", "#c8a856",
    "Very creative and done a neat job."],
  ["JK", "J. Kamala Kannan", "Chennai", "#c8a856",
    "Nice work and good response."],
  ["AA", "Arumugam Arumugam", "Chennai", "#c8a856",
    "Had a good experience."],
];

const MAX_MOBILE  = testimonials.length - 1; // 4
const MAX_DESKTOP = testimonials.length - 3; // 2
const INTERVAL_MS = 3500;

/* ── Card ── */
function TestimonialCard({
  initials, name, location, color, text,
}: {
  initials: string; name: string; location: string; color: string; text: string;
}) {
  return (
    <div className="relative h-full rounded-[14px] border border-[#c8a8561a] bg-white/4 p-6 sm:p-8">
      <div className="mb-4 flex items-start justify-between">
        <div className="text-[0.88rem] text-[#c8a856]">★★★★★</div>
        <GoogleIcon />
      </div>
      <p className="mb-7 text-[0.91rem] font-light italic leading-[1.82] text-white/60">{text}</p>
      <div className="flex items-center gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[0.84rem] font-semibold"
          style={{ backgroundColor: `${color}26`, color }}
        >
          {initials}
        </div>
        <div>
          <div className="mb-0.5 text-[0.88rem] font-semibold text-white">{name}</div>
          <div className="text-[0.74rem] text-white/30">{location}</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

/* ── Nav dots + arrows ── */
function CarouselNav({
  active, total, perView, onPrev, onNext, onDot,
}: {
  active: number; total: number; perView: number;
  onPrev: () => void; onNext: () => void; onDot: (i: number) => void;
}) {
  const maxIndex = total - perView;

  return (
    <div className="mt-8 flex items-center justify-center gap-6">
      <button
        type="button"
        onClick={onPrev}
        disabled={active === 0}
        aria-label="Previous"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a85640] text-[#c8a856] transition-all duration-200 disabled:opacity-20"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onDot(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "h-2 w-6 bg-[#c8a856]" : "h-2 w-2 bg-white/20"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={active === maxIndex}
        aria-label="Next"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a85640] text-[#c8a856] transition-all duration-200 disabled:opacity-20"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

/* ── Main section ── */
export default function TestimonialsSection() {
  const [activeMobile,  setActiveMobile]  = useState(0);
  const [activeDesktop, setActiveDesktop] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStart  = useRef(0);

  /* ── Auto-play ── */
  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveMobile ((p) => (p >= MAX_MOBILE  ? 0 : p + 1));
      setActiveDesktop((p) => (p >= MAX_DESKTOP ? 0 : p + 1));
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      startTimer();
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, startTimer]);

  /* Manual nav resets the countdown so it doesn't jump too soon */
  const goMobile = (index: number) => { setActiveMobile(index);  startTimer(); };
  const goDesktop = (index: number) => { setActiveDesktop(index); startTimer(); };

  /* Touch swipe */
  const touchHandlers = (go: (i: number) => void, current: number, max: number) => ({
    onTouchStart: (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; },
    onTouchEnd:   (e: React.TouchEvent) => {
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (diff >  40) go(Math.min(current + 1, max));
      if (diff < -40) go(Math.max(current - 1, 0));
    },
  });

  const pauseProps = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
  };

  return (
    <section id="testimonials" className="bg-[#1a2e20] py-10 md:py-24">
      <Container>
        {/* Header */}
        <div className="mb-14 text-center">
          <MotionReveal>
            <SectionTag centered noLine>Testimonials</SectionTag>
          </MotionReveal>
          <MotionReveal delayMs={100}>
            <SectionHeading light className="mb-3">
              What Our <em className="text-[#c8a856]">Clients Say</em>
            </SectionHeading>
          </MotionReveal>
          <MotionReveal delayMs={180}>
            <BodyText light className="mx-auto text-center">
              We take pride in delivering satisfaction through quality work and professional service.
            </BodyText>
          </MotionReveal>
        </div>

        {/* ── Mobile carousel — 1 card ── */}
        <MotionReveal delayMs={200} className="lg:hidden">
          <div
            className="overflow-hidden"
            {...pauseProps}
            {...touchHandlers(goMobile, activeMobile, MAX_MOBILE)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeMobile * 100}%)` }}
            >
              {testimonials.map(([initials, name, location, color, text]) => (
                <div key={name} className="w-full shrink-0 px-1">
                  <TestimonialCard {...{ initials, name, location, color, text }} />
                </div>
              ))}
            </div>
          </div>

          <CarouselNav
            active={activeMobile}
            total={testimonials.length}
            perView={1}
            onPrev={() => goMobile(Math.max(activeMobile - 1, 0))}
            onNext={() => goMobile(Math.min(activeMobile + 1, MAX_MOBILE))}
            onDot={goMobile}
          />
          <p className="mt-3 text-center text-[0.72rem] text-white/25">
            {activeMobile + 1} / {testimonials.length}
          </p>
        </MotionReveal>

        {/* ── Desktop carousel — 3 cards ── */}
        <MotionReveal delayMs={200} className="hidden lg:block">
          <div className="overflow-hidden" {...pauseProps}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeDesktop * (100 / 3)}%)` }}
            >
              {testimonials.map(([initials, name, location, color, text]) => (
                <div key={name} className="w-1/3 shrink-0 px-2.5">
                  <TestimonialCard {...{ initials, name, location, color, text }} />
                </div>
              ))}
            </div>
          </div>

          <CarouselNav
            active={activeDesktop}
            total={testimonials.length}
            perView={3}
            onPrev={() => goDesktop(Math.max(activeDesktop - 1, 0))}
            onNext={() => goDesktop(Math.min(activeDesktop + 1, MAX_DESKTOP))}
            onDot={goDesktop}
          />
        </MotionReveal>
      </Container>
    </section>
  );
}
