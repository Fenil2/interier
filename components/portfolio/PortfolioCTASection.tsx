import FadeIn from "../animations/FadeIn";

export default function PortfolioCTASection() {
  return (
    <section className="mt-12 md:mt-16 px-4 sm:px-8 max-w-[1440px] mx-auto mb-16">
      <FadeIn direction="up" className="bg-[#131b2e] p-8 md:p-16 lg:p-20 flex flex-col md:flex-row justify-between items-center gap-10 rounded-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none" />
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e6c275] to-transparent" />
        {/* Corner marks */}
        <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-[#e6c275]/40 pointer-events-none" />

        <div className="relative max-w-xl text-center md:text-left">
          <span className="eyebrow mb-5 block">Next Steps</span>
          <h2
            className="text-[2rem] leading-[1.2] font-bold text-white mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Envisioning a milestone project?
          </h2>
          <p className="text-[#9aa5b8] text-base leading-relaxed">
            Our process begins with materiality and ends with architectural
            poetry. Let&apos;s discuss your vision.
          </p>
        </div>
        <div className="relative flex flex-col gap-4 w-full md:w-auto shrink-0">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#e6c275] text-[#131b2e] px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95"
          >
            Inquire About Services
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/80 px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all active:scale-95"
          >
            Download Portfolio PDF
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
