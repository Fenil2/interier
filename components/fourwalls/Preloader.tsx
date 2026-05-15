"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setPhase("exit"), 2400);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 3300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`preloader${phase === "exit" ? " preloader--exit" : ""}`} aria-hidden="true">
      <div className="preloader__panel preloader__panel--top" />
      <div className="preloader__panel preloader__panel--bottom" />
      <div className="preloader__seam" />
      <div className="preloader__content">
        <div className="preloader__logo">
          <Image
            src="/flourlogo.jpeg"
            alt="Fourwalls"
            width={76}
            height={76}
            className="rounded-[14px] object-cover"
            priority
          />
        </div>
        <div className="preloader__brand">FOURWALLS</div>
        <div className="preloader__tagline">Interiors &amp; Constructions</div>
        <div className="preloader__progress">
          <div className="preloader__progress-fill" />
        </div>
      </div>
    </div>
  );
}
