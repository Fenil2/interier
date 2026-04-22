import FadeIn from "../animations/FadeIn";

export default function FeaturedTestimonial() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 mb-16 md:mb-28">
      <FadeIn direction="up" className="grid grid-cols-1 overflow-hidden rounded-md border border-[#131b2e]/10 bg-white shadow-sm lg:grid-cols-12">
        <div className="lg:col-span-7">
          <img
            alt="Luxury residential interior delivered for a client"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-12">
          <span className="material-symbols-outlined mb-6 text-4xl text-[#e6c275]">
            format_quote
          </span>
          <p
            className="mb-8 text-[1.7rem] leading-snug tracking-tight text-[#131b2e] md:text-[2.1rem]"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            &ldquo;They translated our vision into a home that feels calm, exact,
            and deeply personal. The process was transparent from the first
            drawing to final handover.&rdquo;
          </p>
          <div className="border-t border-[#131b2e]/10 pt-6">
            <p className="text-lg font-bold text-[#131b2e]">Julian &amp; Elena Thorne</p>
            <p className="mt-1 font-label text-xs uppercase tracking-widest text-[#76777d]">
              Private Residence, Chennai
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
