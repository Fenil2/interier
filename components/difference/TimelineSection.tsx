export default function TimelineSection() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-24">
        {/* Sticky heading */}
        <div className="md:w-1/3">
          <h2
            className="text-4xl font-bold text-on-primary-fixed sticky top-40 mb-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            The Customized <br />
            Approach.
          </h2>
          <p className="text-on-secondary-fixed-variant leading-relaxed">
            We reject the template. Every site has a soul, every client has a
            dream, and every project demands a unique architectural response.
          </p>
        </div>

        {/* Steps */}
        <div className="md:w-2/3 space-y-24">

          {/* Step 1 */}
          <div className="relative pl-12 border-l border-outline-variant/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-tertiary-fixed-dim rounded-full" />
            <span className="font-label text-xs text-on-tertiary-fixed-variant mb-2 block uppercase tracking-widest">
              Phase 01 — Contextual Deep-Dive
            </span>
            <h4
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Site &amp; Soul Integration
            </h4>
            <p className="text-on-secondary-fixed-variant leading-relaxed mb-6">
              We begin by studying the light, the topography, and the unique
              rhythms of your life to ensure the structure feels native to its
              environment.
            </p>
            <div className="h-64 rounded-md overflow-hidden bg-surface-container">
              <img
                alt="Architectural site planning"
                src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-12 border-l border-outline-variant/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-on-primary-fixed rounded-full" />
            <span className="font-label text-xs text-on-tertiary-fixed-variant mb-2 block uppercase tracking-widest">
              Phase 02 — Materiality Curation
            </span>
            <h4
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Tactile Storytelling
            </h4>
            <p className="text-on-secondary-fixed-variant leading-relaxed mb-6">
              Selection of materials that age gracefully. We prioritize textures
              that evoke emotion—the coldness of stone, the warmth of reclaimed
              oak.
            </p>
            <div className="grid grid-cols-2 gap-4 h-48">
              <div className="bg-surface-container-low rounded-md overflow-hidden">
                <img
                  alt="Charcoal stone texture"
                  src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="bg-surface-container-low rounded-md overflow-hidden">
                <img
                  alt="Oak wood grain texture"
                  src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-12 border-l border-outline-variant/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-tertiary-fixed-dim rounded-full" />
            <span className="font-label text-xs text-on-tertiary-fixed-variant mb-2 block uppercase tracking-widest">
              Phase 03 — Technical Precision
            </span>
            <h4
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              The Final Handover
            </h4>
            <p className="text-on-secondary-fixed-variant leading-relaxed">
              Execution with zero tolerance for error. Our construction team
              treats every millimetre as a critical architectural detail.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
