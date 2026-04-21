const steps = [
  {
    number: "01.",
    title: "Conceptual Resonance",
    description:
      "Every journey begins with deep inquiry. We explore the dialogue between your vision and the site's unique topographical DNA.",
    offset: "",
    src: "https://images.pexels.com/photos/6758778/pexels-photo-6758778.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Architectural drawing",
  },
  {
    number: "02.",
    title: "Material Curation",
    description:
      "We source the world's most evocative materials, ensuring each surface feels as exquisite as it looks under natural light.",
    offset: "mt-12 md:mt-24",
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Material samples",
  },
  {
    number: "03.",
    title: "Surgical Execution",
    description:
      "Our master builders translate plans into reality with uncompromising precision, ensuring every joint is a testament to quality.",
    offset: "mt-12 md:mt-48",
    src: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Construction site detail",
  },
];

export default function ProcessSection() {
  return (
    <section className="mb-16 md:mb-32 px-4 sm:px-8 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6 block">Our Process</span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#131b2e] tracking-tight"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              From Vellum to{" "}
              <span className="italic text-[#e6c275]">Limestone</span>
            </h2>
          </div>
          <button className="flex items-center gap-4 group text-[#131b2e] font-bold text-xs uppercase tracking-widest border border-[#131b2e]/20 px-6 py-3 rounded-sm hover:bg-[#131b2e] hover:text-white transition-all duration-300">
            View Detailed Process
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              east
            </span>
          </button>
        </div>

        {/* Staggered steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className={`flex flex-col gap-8 ${step.offset}`}>
              <div className="aspect-square bg-[#f0ede9] rounded-sm overflow-hidden group shadow-lg">
                <img
                  alt={step.alt}
                  src={step.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-white border border-[#131b2e]/8 p-6 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-[3px] bg-[#e6c275]" />
                <span
                  className="text-3xl italic text-[#e6c275] mb-3 block font-bold"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-lg font-bold text-[#131b2e] mb-3"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#3c475a] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
