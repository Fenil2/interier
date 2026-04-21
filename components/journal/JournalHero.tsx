const topics = ["All Posts", "Interiors", "Materials", "Renovation", "Construction"];

export default function JournalHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid !items-center">
        <div className="md:col-span-7">
          <span className="eyebrow">Aurelian Blog</span>
          <h1 className="page-hero-title">
            Ideas for Better Built Spaces
          </h1>
          <p className="page-hero-copy">
            Practical notes from our studio on interiors, construction details,
            renovation planning, material choices, and the decisions that make a
            space feel composed.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-md border border-[#131b2e]/10 bg-white p-4 shadow-sm sm:p-5">
            <p className="mb-4 text-[0.68rem] font-label uppercase tracking-widest text-[#76777d]">
              Browse Topics
            </p>
            <div className="flex flex-wrap gap-2.5">
              {topics.map((topic, index) => (
                <span
                  key={topic}
                  className={`rounded-sm border px-3.5 py-2 font-label text-[0.68rem] uppercase tracking-widest transition-colors ${
                    index === 0
                      ? "border-[#131b2e] bg-[#131b2e] text-[#e6c275]"
                      : "border-[#131b2e]/15 text-[#3c475a] hover:border-[#131b2e] hover:text-[#131b2e]"
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
