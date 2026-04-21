const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12", label: "International Awards" },
  { value: "0.1mm", label: "Tolerance Precision" },
  { value: "24", label: "Artisan Partners" },
];

export default function AboutStatsSection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-24 bg-[#131b2e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern-light pointer-events-none opacity-70" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e6c275]/80 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 p-8 md:p-12 text-center group transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 rounded-sm"
            >
              <span
                className="block text-5xl md:text-6xl font-bold text-[#e6c275] mb-4 transition-transform group-hover:-translate-y-1"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                {stat.value}
              </span>
              <span className="block font-label text-xs uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
