"use client";
import { useState } from "react";

const filters = ["All Projects", "Residential", "Commercial", "Construction", "Renovation"];

export default function FilterBar() {
  const [active, setActive] = useState("All Projects");

  return (
    <section className="px-8 max-w-[1440px] mx-auto mb-16">
      <div className="flex flex-wrap items-center gap-8 py-6 border-y border-outline-variant/15">
        <span className="text-label-sm font-bold text-on-primary-fixed">
          Filter By Typology:
        </span>
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={
                  isActive
                    ? "text-label-sm text-tertiary-fixed-dim border-b border-tertiary-fixed-dim pb-1"
                    : "text-label-sm text-on-secondary-fixed-variant hover:text-on-primary-fixed transition-colors"
                }
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
