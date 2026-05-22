"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import MotionReveal from "./MotionReveal";
import { Container, SectionHeading, SectionTag } from "./shared";

const POSTS = [
  "DYeuaKXvcYR",
  "DYZd9bbvavt",
  "DYUUVbcvqSR",
  "DYMuH2VyocD",
  "DYE3qFGPNA9",
  "DX_s7_6SDvt",
];

/* mobile  → 1 visible  → max index = 5 */
/* ≥ md    → 2 visible  → max index = 4 */
/* ≥ lg    → 3 visible  → max index = 3 */
const PER_VIEW_SM = 1;
const PER_VIEW_MD = 2;
const PER_VIEW_LG = 3;
const INTERVAL_MS = 4500;

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad)" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad)" />
      <defs>
        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f09433" />
          <stop offset="0.25" stopColor="#e6683c" />
          <stop offset="0.5" stopColor="#dc2743" />
          <stop offset="0.75" stopColor="#cc2366" />
          <stop offset="1" stopColor="#bc1888" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PostCard({ code }: { code: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-[#c8a85618] bg-[#142218]">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#142218]">
          <InstagramIcon />
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-[#c8a856]/40" />
          </div>
        </div>
      )}
      <iframe
        src={`https://www.instagram.com/p/${code}/embed/`}
        className="w-full"
        style={{ height: 540, border: "none", display: "block" }}
        loading="lazy"
        allowFullScreen
        title={`Instagram post ${code}`}
        onLoad={() => setLoaded(true)}
      />
      <a
        href={`https://www.instagram.com/p/${code}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-[#1a2e20]/80 px-3 py-1.5 text-[0.7rem] font-semibold text-white/80 backdrop-blur-sm transition-all hover:bg-[#1a2e20]"
      >
        <InstagramIcon className="h-3.5 w-3.5" />
        <span>View</span>
      </a>
    </div>
  );
}

function NavBtn({ dir, onClick, disabled }: { dir: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a85640] text-[#c8a856] transition-all duration-200 disabled:opacity-20"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {dir === "prev"
          ? <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        }
      </svg>
    </button>
  );
}

/* Single reusable carousel for a given perView count */
function Reel({ perView }: { perView: number }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStart  = useRef(0);
  const maxIndex    = POSTS.length - perView;
  const cardWidth   = 100 / perView; // percent

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => (p >= maxIndex ? 0 : p + 1));
    }, INTERVAL_MS);
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) { if (intervalRef.current) clearInterval(intervalRef.current); }
    else startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, startTimer]);

  const go = (i: number) => { setActive(i); startTimer(); };

  return (
    <div>
      {/* Track */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = touchStart.current - e.changedTouches[0].clientX;
          if (diff >  40) go(Math.min(active + 1, maxIndex));
          if (diff < -40) go(Math.max(active - 1, 0));
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * cardWidth}%)` }}
        >
          {POSTS.map((code) => (
            <div key={code} className="shrink-0 px-2.5" style={{ width: `${cardWidth}%` }}>
              <PostCard code={code} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <NavBtn dir="prev" disabled={active === 0}        onClick={() => go(Math.max(active - 1, 0))} />
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "h-2 w-6 bg-[#c8a856]" : "h-2 w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
        <NavBtn dir="next" disabled={active === maxIndex} onClick={() => go(Math.min(active + 1, maxIndex))} />
      </div>
    </div>
  );
}

export default function InstagramSection() {
  return (
    <section className="bg-[#0f1a12] py-10 md:py-24">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <MotionReveal>
            <SectionTag centered noLine>Instagram</SectionTag>
          </MotionReveal>
          <MotionReveal delayMs={100}>
            <SectionHeading light className="mb-4">
              Our Work on <em className="text-[#c8a856]">Instagram</em>
            </SectionHeading>
          </MotionReveal>
          <MotionReveal delayMs={160}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#c8a85630] px-5 py-2 text-[0.8rem] font-medium text-[#c8a856] transition-all hover:bg-[#c8a85610]"
            >
              <InstagramIcon />
              Follow us on Instagram
            </a>
          </MotionReveal>
        </div>

        {/* Responsive carousels — single horizontal row at all sizes */}
        <MotionReveal delayMs={200} className="sm:hidden">
          <Reel perView={PER_VIEW_SM} />
        </MotionReveal>

        <MotionReveal delayMs={200} className="hidden sm:block lg:hidden">
          <Reel perView={PER_VIEW_MD} />
        </MotionReveal>

        <MotionReveal delayMs={200} className="hidden lg:block">
          <Reel perView={PER_VIEW_LG} />
        </MotionReveal>
      </Container>
    </section>
  );
}
