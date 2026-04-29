import FadeIn from "../animations/FadeIn";

export default function NewsletterSection() {
  return (
    <section className="bg-[#131b2e] py-16 md:py-24">
      <div className="px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <FadeIn direction="left" className="md:col-span-7">
            <span className="eyebrow mb-6">Blog Updates</span>
            <h3
              className="mb-4 max-w-3xl text-[2.2rem] font-bold leading-tight text-white md:text-[3.2rem]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Get practical design and construction notes in your inbox.
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-white/58">
              No noise, just useful ideas on interiors, materials, renovation
              sequencing, and project planning.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="md:col-span-5">
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <label
                htmlFor="blog-email"
                className="mb-3 block font-label text-[0.68rem] uppercase tracking-widest text-[#e6c275]"
              >
                Email Address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="blog-email"
                  type="email"
                  placeholder="you@example.com"
                  className="min-h-12 flex-1 rounded-sm border border-white/12 bg-white/6 px-4 text-sm text-white outline-none placeholder:text-white/28 focus:border-[#e6c275]"
                />
                <button className="min-h-12 rounded-sm bg-[#e6c275] px-6 font-label text-xs font-bold uppercase tracking-widest text-[#131b2e] transition-colors hover:bg-[#f0d48a]">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-white/38">
                Monthly blog digest. Unsubscribe whenever you like.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
