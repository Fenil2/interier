export default function AboutCTASection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-24 bg-[#131b2e] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e6c275]/80 to-transparent" />
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#e6c275]/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#e6c275]/30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="eyebrow justify-center mb-8 block">Begin Your Journey</span>
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Let us build your{" "}
          <span className="italic text-[#e6c275]">legacy</span>.
        </h2>
        <a
          href="/contact"
          className="inline-flex items-center gap-4 bg-[#e6c275] text-[#131b2e] px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-2xl transition-all active:scale-95 group"
        >
          Start Your Project
          <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">
            north_east
          </span>
        </a>
      </div>
    </section>
  );
}
