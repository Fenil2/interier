export default function DifferenceHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="md:col-span-8">
          <span className="eyebrow">The Fourwalls Edge</span>
          <h1
            className="page-hero-title"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            What Makes Us <br />
            <span className="italic text-[#e6c275]">Different.</span>
          </h1>
          <p className="page-hero-copy">
            Architecture is more than just structure; it is the physical
            manifestation of soul and precision. At Fourwalls, we bridge the gap
            between visionary design and technical mastery.
          </p>
        </div>

        <div className="md:col-span-4">
          <div className="aspect-[3/4] bg-[#f0ede9] rounded-sm relative overflow-hidden shadow-xl">
            <img
              alt="Luxury interior architectural detail"
              src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
