export default function ServicesCTASection() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-8 bg-[#f0ede9] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="w-14 h-14 flex items-center justify-center bg-[#131b2e] rounded-sm mx-auto mb-8">
          <span className="material-symbols-outlined text-[#e6c275] text-2xl">edit_note</span>
        </div>
        <span className="eyebrow justify-center mb-6 block">Get Started</span>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#131b2e] mb-8 tracking-tight"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Your vision, structurally <br />{" "}
          <span className="italic text-[#e6c275]">realized.</span>
        </h2>
        <p className="text-lg text-[#3c475a] mb-12 leading-relaxed max-w-xl mx-auto">
          Whether it&apos;s a private residence or a commercial landmark, our team
          is ready to bring architectural precision to your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#131b2e] text-[#e6c275] px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[#1e2d48] transition-colors"
          >
            Start a Conversation
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center gap-3 border-2 border-[#131b2e] text-[#131b2e] px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[#131b2e] hover:text-white transition-all"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
