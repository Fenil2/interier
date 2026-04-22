import FadeIn from "../animations/FadeIn";

export default function FeaturedEditorial() {
  return (
    <section className="px-4 sm:px-8 max-w-[1440px] mx-auto mb-16 md:mb-28">
      <FadeIn direction="up" className="grid grid-cols-1 overflow-hidden rounded-md border border-[#131b2e]/10 bg-white shadow-sm lg:grid-cols-12">
        <div className="lg:col-span-7">
          <img
            alt="Warm modern living room with refined interior details"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-12">
          <span className="mb-4 font-label text-xs font-bold uppercase tracking-widest text-[#9e803a]">
            Featured Blog
          </span>
          <h2
            className="mb-5 text-[2rem] font-bold leading-tight text-[#131b2e] md:text-[2.6rem]"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            How to Plan a Home Interior Before Construction Begins
          </h2>
          <p className="mb-8 text-base leading-relaxed text-[#3c475a]">
            The strongest interiors are planned before walls are closed. Here is
            how early decisions around services, storage, light, and finishes
            prevent costly redesign later.
          </p>
          <div className="flex flex-wrap items-center gap-4 border-t border-[#131b2e]/10 pt-5 text-[0.68rem] font-label uppercase tracking-widest text-[#76777d]">
            <span>Interiors</span>
            <span className="h-px w-8 bg-[#e6c275]" />
            <span>6 Min Read</span>
            <span className="h-px w-8 bg-[#e6c275]" />
            <span>Studio Guide</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
