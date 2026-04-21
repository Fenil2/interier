export default function RenovationSection() {
  return (
    <section className="py-24 px-8 max-w-[1440px] mx-auto">
      <div className="relative rounded-md overflow-hidden bg-on-primary-fixed min-h-[400px] md:h-[600px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="Heritage Renovation"
            src="https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-full object-cover opacity-50 scale-110"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-24 py-12 md:py-0 max-w-4xl">
          <span className="inline-block px-4 py-1 border border-tertiary-fixed-dim text-tertiary-fixed-dim font-label text-[0.6rem] uppercase tracking-widest mb-8">
            Structural Revival
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold text-surface mb-8 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Heritage Renovation &amp; Restoration.
          </h2>
          <p className="text-surface-container-high text-lg leading-relaxed mb-10 max-w-2xl">
            Breathing new life into existing structures. Our renovation service
            balances the preservation of historical character with the insertion of
            modern technological amenities.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-tertiary-fixed-dim text-on-primary-fixed px-10 py-4 rounded-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg">
              Request Assessment
            </button>
            <button className="border border-surface/30 text-surface px-10 py-4 rounded-sm font-bold hover:bg-surface/10 transition-all">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Vertical text decoration */}
        <div className="absolute right-12 hidden lg:flex flex-col items-center gap-12">
          <div className="perspective-text font-label text-[0.6rem] text-surface/30 tracking-[0.5em] uppercase">
            Built with Poise
          </div>
          <div className="w-px h-32 bg-surface/20" />
        </div>
      </div>
    </section>
  );
}
