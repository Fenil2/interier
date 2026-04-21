export default function PortfolioHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="lg:col-span-8">
          <span className="eyebrow">Milestones &amp; Achievements</span>
          <h1
            className="page-hero-title"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Architectural Poise <br />&amp; Timeless Structure
          </h1>
          <p className="page-hero-copy">
            A curated anthology of spaces where structural integrity meets the
            soul of materiality. Explore our legacy of precision in luxury
            residential and high-performance commercial design.
          </p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right border-t lg:border-t-0 lg:border-l border-[#e6c275]/30 pt-6 lg:pt-0 lg:pl-8">
            <span
              className="text-[3rem] md:text-[4.5rem] leading-[1.0] font-bold text-[#e6c275] italic"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              24
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-[#3c475a] mt-1">Distinguished Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
