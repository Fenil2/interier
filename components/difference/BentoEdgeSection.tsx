export default function BentoEdgeSection() {
  return (
    <section className="px-4 sm:px-8 md:px-12 py-14 md:py-20 bg-surface-container-low relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[800px]">

          {/* Feature 1: Proven Experience */}
          <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest p-8 md:p-12 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 rounded-md">
            <div>
              <span className="material-symbols-outlined text-4xl text-on-primary-fixed mb-8 block group-hover:text-tertiary-fixed-dim transition-colors">
                history_edu
              </span>
              <h3
                className="text-2xl font-bold text-on-primary-fixed mb-4"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Proven Experience
              </h3>
              <p className="text-on-secondary-fixed-variant leading-relaxed">
                A decade of refining our craft across complex residential and
                commercial landscapes. We don&apos;t just build; we solve problems
                before they arise.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <span className="font-label text-xs uppercase tracking-widest text-on-primary-fixed/50">
                Experience Marker: 150+ Signature Projects
              </span>
            </div>
          </div>

          {/* Feature 2: Dedicated Management — tall dark card */}
          <div className="md:col-span-1 md:row-span-2 bg-on-primary-fixed p-8 md:p-12 text-surface flex flex-col justify-between relative overflow-hidden rounded-md">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">
                account_tree
              </span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-8 block">
                supervisor_account
              </span>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Dedicated Management
              </h3>
              <p className="text-surface-container-high leading-relaxed">
                One project. One manager. Absolute accountability. We assign a
                single point of contact to ensure your vision never gets lost in
                translation.
              </p>
            </div>
            <div className="relative z-10">
              <ul className="space-y-4 text-sm font-label uppercase tracking-widest text-tertiary-fixed-dim/80">
                <li>Direct Access</li>
                <li>Daily Reporting</li>
                <li>Single Accountability</li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Clear Communication */}
          <div className="md:col-span-1 md:row-span-1 bg-surface-container-high p-8 flex flex-col justify-center rounded-md">
            <span className="material-symbols-outlined text-3xl text-on-primary-fixed mb-6">
              chat_bubble_outline
            </span>
            <h3
              className="text-xl font-bold text-on-primary-fixed mb-2"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Clear Communication
            </h3>
            <p className="text-sm text-on-secondary-fixed-variant">
              Transparent jargon-free updates and real-time project tracking via
              our client portal.
            </p>
          </div>

          {/* Feature 4: High-Quality Materials */}
          <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-md group">
            <img
              alt="Luxury materials marble and wood"
              src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="relative z-10 p-12 flex flex-col h-full justify-end text-white">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                High-Quality Materials
              </h3>
              <p className="text-surface-container-high max-w-md">
                We source ethically and specify only the highest grade of
                architectural materials to ensure longevity and aesthetic
                permanence.
              </p>
            </div>
          </div>

          {/* Feature 5: Timely Delivery */}
          <div className="md:col-span-1 md:row-span-1 bg-tertiary-fixed-dim p-8 flex flex-col justify-center rounded-md">
            <span className="material-symbols-outlined text-3xl text-on-primary-fixed mb-6">
              schedule
            </span>
            <h3
              className="text-xl font-bold text-on-primary-fixed mb-2"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Timely Delivery
            </h3>
            <p className="text-sm text-on-primary-fixed/70">
              Our &quot;On-Time-Always&quot; guarantee is backed by rigorous
              critical-path project scheduling.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
