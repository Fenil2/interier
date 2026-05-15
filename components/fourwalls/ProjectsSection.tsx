"use client";

import Image from "next/image";
import { useState } from "react";
import { projectFilters, projects } from "./data";
import MotionReveal from "./MotionReveal";
import { ArrowLink, Container, SectionHeading, SectionTag } from "./shared";

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  return (
    <section id="projects" className="bg-white py-10 md:py-24">
      <Container>
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <MotionReveal>
              <SectionTag>Projects</SectionTag>
            </MotionReveal>
            <MotionReveal delayMs={100}>
              <SectionHeading>
                Our <em className="text-[#01c1ff]">Recent Works</em>
              </SectionHeading>
            </MotionReveal>
          </div>
          <MotionReveal delayMs={180}>
            <ArrowLink href="#contact">View All Projects →</ArrowLink>
          </MotionReveal>
        </div>

        <MotionReveal delayMs={220} className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`cursor-pointer rounded-full border px-4 py-[0.42rem] text-[0.76rem] tracking-[0.06em] transition-all duration-200 ${
                active === filter
                  ? "border-[#012c3d] bg-[#012c3d] text-[#01c1ff]"
                  : "border-[#012c3d24] bg-transparent text-[#5f8a9f]"
              }`}
            >
              {filter}
            </button>
          ))}
        </MotionReveal>

        <div className="grid grid-cols-1 gap-3 auto-rows-[220px] sm:grid-cols-2 sm:auto-rows-[240px] md:grid-cols-12 md:grid-rows-[300px_270px] md:auto-rows-auto">
          {projects.map((project, index) => (
            <MotionReveal
              key={project.key}
              delayMs={index * 100}
              variant="zoom"
              className={`cinematic-panel relative overflow-hidden rounded-[14px] ${project.className}`}
            >
              <Image src={project.image} alt={project.alt} fill className="cinematic-image object-cover transition-transform duration-700" />

              {/* Strong gradient — full bottom-half coverage */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#010f18fd] via-[#010f1880] via-[45%] to-transparent" />

              {/* Text block */}
              <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 pt-10">
                <p
                  className="mb-1.5 text-[0.6rem] font-bold uppercase tracking-[0.22em]"
                  style={{ color: project.color, textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
                >
                  {project.category}
                </p>
                <p
                  className="font-[var(--font-outfit)] text-[1.18rem] font-bold leading-[1.28] text-white"
                  style={{ textShadow: "0 2px 14px rgba(0,0,0,0.85)" }}
                >
                  {project.title}
                </p>
                <span
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200"
                  style={{ color: project.color, textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                >
                  View Project →
                </span>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delayMs={180}>
          <p className="mt-10 text-center text-[0.87rem] text-[#5f8a9f]">
            Explore our portfolio of thoughtfully designed interiors and well executed construction projects tailored to meet every client&apos;s needs.
          </p>
        </MotionReveal>
      </Container>
    </section>
  );
}
