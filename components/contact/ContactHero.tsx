export default function ContactHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="md:col-span-7">
          <span className="eyebrow">Established in Chennai</span>
          <h1
            className="page-hero-title"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Connect with <span className="italic text-[#e6c275]">Excellence</span>
          </h1>
          <p className="page-hero-copy">
            At Aurelian, we don&apos;t just build spaces; we curate legacies.
            Whether you&apos;re envisioning a private estate in Ooty or a modern
            high-rise in Chennai, our team is ready to translate your
            aspirations into structural reality.
          </p>

          {/* Contact info row */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-8 pt-8 border-t border-[#131b2e]/10">
            <a href="tel:+914420001000" className="flex items-center gap-2 text-[#131b2e] hover:text-[#e6c275] transition-colors font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px] text-[#e6c275]">call</span>
              +91 (44) 2000 1000
            </a>
            <a href="mailto:studio@aurelian.in" className="flex items-center gap-2 text-[#131b2e] hover:text-[#e6c275] transition-colors font-semibold text-sm">
              <span className="material-symbols-outlined text-[18px] text-[#e6c275]">mail</span>
              studio@aurelian.in
            </a>
          </div>
        </div>

        <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
          <div className="relative overflow-hidden rounded-sm group shadow-xl">
            <img
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Premium architectural materials"
              className="w-full h-72 sm:h-80 md:h-[26rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/80 via-[#131b2e]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-label text-[10px] uppercase tracking-widest text-[#e6c275] mb-1">
                Materiality Focus
              </p>
              <p
                className="italic text-xl text-white leading-tight"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Refining the Essence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
