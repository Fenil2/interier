const materials = [
  {
    category: "Stone",
    name: "Italian Carrara",
    offset: false,
    src: "https://images.pexels.com/photos/7195552/pexels-photo-7195552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Italian Carrara marble",
  },
  {
    category: "Coating",
    name: "Mineral Plasters",
    offset: true,
    src: "https://images.pexels.com/photos/7535031/pexels-photo-7535031.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mineral Plasters",
  },
  {
    category: "Timber",
    name: "European White Oak",
    offset: false,
    src: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=1200&q=80",
    alt: "European White Oak timber",
  },
  {
    category: "Metal",
    name: "Hand-Burnished Bronze",
    offset: true,
    src: "https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Hand-Burnished Bronze",
  },
];

export default function MaterialitySection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-on-secondary-fixed-variant mb-4 block">
              The Fabric of Space
            </span>
            <h2
              className="text-4xl font-bold text-on-primary-fixed"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Our Material Philosophy
            </h2>
          </div>
          <p className="max-w-md text-on-secondary-fixed-variant leading-relaxed">
            We source directly from quarries and ateliers across the globe to
            ensure the tactile quality of every surface meets our rigorous
            architectural standards.
          </p>
        </div>

        {/* Material cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {materials.map((mat) => (
            <div
              key={mat.name}
              className={`relative aspect-[3/4] group overflow-hidden rounded-md${
                mat.offset ? " translate-y-8" : ""
              }`}
            >
              <img
                alt={mat.alt}
                src={mat.src}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 to-transparent p-6 flex flex-col justify-end">
                <span className="text-tertiary-fixed-dim font-bold text-xs uppercase tracking-widest mb-1">
                  {mat.category}
                </span>
                <h4
                  className="text-surface text-lg"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {mat.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
