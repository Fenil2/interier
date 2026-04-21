const sectors = [
  {
    icon: "home_work",
    title: "Private Homes",
    copy: "Residences, villas, apartments, and second homes designed around daily rituals.",
  },
  {
    icon: "apartment",
    title: "Commercial Spaces",
    copy: "Workplaces, retail, hospitality, and studios built for brand presence and use.",
  },
  {
    icon: "engineering",
    title: "Builders & Developers",
    copy: "Execution support, technical coordination, and turnkey delivery for complex projects.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#131b2e] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="rounded-md border border-white/10 bg-white/[0.04] p-6 text-white"
            >
              <span className="material-symbols-outlined mb-8 text-3xl text-[#e6c275]">
                {sector.icon}
              </span>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                {sector.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/58">
                {sector.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
