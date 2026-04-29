export default function DifferenceCTASection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 bg-[#131b2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e6c275]/80 to-transparent" />
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#e6c275]/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#e6c275]/30 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto text-center">
        <span className="eyebrow justify-center mb-8 block">Experience the Edge</span>
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Ready to Build Something <br />
          <span className="text-[#e6c275] italic">Authentic?</span>
        </h2>
        <p className="text-[#9aa5b8] max-w-xl mx-auto mb-12 leading-relaxed text-lg">
          Let&apos;s begin with a conversation. Tell us your vision, your site,
          your timeline — and we will show you the Fourwalls difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#e6c275] text-[#131b2e] px-10 py-4 text-xs font-bold uppercase tracking-widest hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Start Your Project
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
