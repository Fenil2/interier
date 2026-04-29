const team = [
  {
    name: "Julian Thorne",
    role: "Founding Architect",
    specialization: "Restoration & Brutalist Interiors",
    src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Lead Architect",
  },
  {
    name: "Elena Vance",
    role: "Director of Materiality",
    specialization: "Sustainable Luxury Textiles & Stone",
    src: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Director of Materiality",
  },
  {
    name: "Marcus Aurel",
    role: "Chief Structural Engineer",
    specialization: "High-Precision Concrete & Steel",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Chief Structural Engineer",
  },
];

export default function TeamSection() {
  return (
    <section className="py-14 md:py-24 bg-on-primary-fixed text-surface px-4 sm:px-8 lg:px-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto text-center mb-12 md:mb-24">
        <span className="block font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-6">
          The Collective
        </span>
        <h2
          className="text-4xl lg:text-5xl font-bold text-surface mb-8"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Architects of Atmosphere
        </h2>
      </div>

      {/* Team grid */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member) => (
          <div key={member.name} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-6">
              <img
                alt={member.alt}
                src={member.src}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-sm font-label uppercase tracking-widest text-tertiary-fixed-dim mb-2">
                  Specialization
                </p>
                <p className="text-xs text-surface-container-high leading-relaxed italic">
                  {member.specialization}
                </p>
              </div>
            </div>
            <h4
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              {member.name}
            </h4>
            <p className="font-label text-xs uppercase tracking-widest text-tertiary-fixed-dim">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
