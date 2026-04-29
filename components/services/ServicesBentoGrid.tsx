export default function ServicesBentoGrid() {
  return (
    <section className="px-4 sm:px-8 py-14 md:py-20 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Interior Design — large feature */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Text side */}
              <div className="p-6 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-6 block">
                    chair
                  </span>
                  <h3
                    className="text-3xl font-bold mb-4 text-on-primary-fixed"
                    style={{ fontFamily: "var(--font-noto-serif), serif" }}
                  >
                    Bespoke Interior Architecture
                  </h3>
                  <p className="text-on-secondary-fixed-variant leading-relaxed mb-8">
                    Crafting sensory experiences through spatial curation. Our
                    interior team focuses on materiality, lighting, and ergonomic
                    flow to create environments that resonate with the
                    inhabitant&apos;s soul.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Spatial Optimization", "Custom FF&E Sourcing", "Lighting Narratives"].map(
                      (item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm font-medium text-on-surface-variant"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim flex-shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-on-primary-fixed hover:text-tertiary-fixed-dim transition-colors group-hover:translate-x-2 duration-300"
                >
                  Explore Portfolios{" "}
                  <span className="material-symbols-outlined">trending_flat</span>
                </a>
              </div>

              {/* Image side */}
              <div className="relative min-h-[400px]">
                <img
                  alt="Bespoke Interior Architecture"
                  src="https://images.pexels.com/photos/8146318/pexels-photo-8146318.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-on-primary-fixed/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </div>

          {/* Master Construction — vertical */}
          <div className="md:col-span-4 group relative overflow-hidden bg-primary-container rounded-md text-surface h-full min-h-[500px]">
            <img
              alt="Master Construction"
              src="https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative h-full p-6 md:p-12 flex flex-col justify-between z-10">
              <div>
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-6 block">
                  foundation
                </span>
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  Master Construction
                </h3>
                <p className="text-surface-container-high leading-relaxed opacity-80">
                  Engineering durability into every structural joint. We specialize
                  in complex residential and commercial frameworks using premium
                  sustainable materials.
                </p>
              </div>
              <button className="w-fit border border-tertiary-fixed-dim/30 hover:bg-tertiary-fixed-dim hover:text-primary-container transition-all duration-300 px-8 py-3 font-semibold">
                Structural Specs
              </button>
            </div>
          </div>

          {/* Modular Systems */}
          <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-md shadow-sm flex flex-col justify-between group hover:bg-on-primary-fixed transition-colors duration-500">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg mb-8 group-hover:bg-tertiary-fixed-dim transition-colors">
                <span className="material-symbols-outlined text-on-primary-fixed">
                  grid_view
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 group-hover:text-surface transition-colors"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Modular Systems
              </h3>
              <p className="text-on-secondary-fixed-variant group-hover:text-surface-container-high transition-colors leading-relaxed">
                Precision-engineered cabinetry and kitchen systems manufactured
                with German tolerances and Italian aesthetics.
              </p>
            </div>
            <span className="mt-8 block h-px bg-outline-variant/30 group-hover:bg-tertiary-fixed-dim/30" />
            <div className="pt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs uppercase tracking-widest text-tertiary-fixed-dim font-bold">
                Standardized Excellence
              </span>
              <span className="material-symbols-outlined text-surface">
                arrow_outward
              </span>
            </div>
          </div>

          {/* Turnkey Delivery */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-md shadow-sm">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 relative overflow-hidden min-h-[300px]">
                <img
                  alt="Turnkey Delivery"
                  src="https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
                <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-4 block font-bold">
                  Concept to Key
                </span>
                <h3
                  className="text-3xl font-bold mb-4 text-on-primary-fixed"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  Turnkey Delivery
                </h3>
                <p className="text-on-secondary-fixed-variant leading-relaxed mb-6">
                  Single-point accountability for the entire project lifecycle. We
                  manage procurement, permits, and execution while you focus on the
                  vision.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "0%", label: "Complexity Gap" },
                    { value: "100%", label: "Fixed Timelines" },
                  ].map(({ value, label }) => (
                    <div key={label} className="border-t border-outline-variant pt-4">
                      <span
                        className="block text-xl font-bold"
                        style={{ fontFamily: "var(--font-noto-serif), serif" }}
                      >
                        {value}
                      </span>
                      <span className="text-[0.6rem] uppercase tracking-tighter text-on-surface-variant">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
