export default function ClientsHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid !items-center">
        <div className="md:col-span-7">
          <span className="eyebrow">Our Clients</span>
          <h1
            className="page-hero-title"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Partnerships Built on Trust
          </h1>
          <p className="page-hero-copy">
            From private homes to commercial environments, our clients come to
            us for clarity, craft, and a process that keeps ambitious spaces
            moving with confidence.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-3 rounded-md border border-[#131b2e]/10 bg-white p-4 shadow-sm sm:p-5">
            {[
              ["150+", "Completed Works"],
              ["98%", "Client Retention"],
              ["24", "Design Awards"],
              ["12", "Years of Mastery"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-sm bg-[#f6f3ee] p-4">
                <p
                  className="text-3xl font-bold leading-none text-[#131b2e]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {value}
                </p>
                <p className="mt-3 font-label text-[0.65rem] uppercase tracking-widest text-[#76777d]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
