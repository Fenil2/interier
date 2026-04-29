import FadeIn from "../animations/FadeIn";

export default function ClientsCTASection() {
  return (
    <section className="bg-[#f6f3ee] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <FadeIn direction="up" className="grid grid-cols-1 items-center gap-10 rounded-md border border-[#131b2e]/10 bg-white p-6 shadow-sm md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <span className="eyebrow mb-6">Begin Your Journey</span>
            <h2
              className="mb-5 max-w-3xl text-[2.2rem] font-bold leading-tight text-[#131b2e] md:text-[3rem]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Ready to become our next client story?
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#3c475a]">
              Tell us what you are planning, and we will help you understand the
              right scope, sequence, budget priorities, and next steps.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-4">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#131b2e] px-6 py-4 font-label text-xs font-bold uppercase tracking-widest text-[#e6c275] transition-colors hover:bg-[#1e2d48]"
            >
              Start Your Project
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="/portfolio"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-[#131b2e] px-6 py-4 font-label text-xs font-bold uppercase tracking-widest text-[#131b2e] transition-colors hover:bg-[#131b2e] hover:text-white"
            >
              View Portfolio
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
