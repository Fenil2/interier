export default function ContactFooter() {
  return (
    <footer className="bg-[#f6f3ee] border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <span
            className="text-xl uppercase tracking-[0.1em] text-[#131b2e] block mb-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            AURELIAN
          </span>
          <p className="text-body-lg text-[#3c475a] leading-relaxed">
            Architectural mastery through precision and restraint.
          </p>
        </div>

        {/* Navigation — starts at col 3 */}
        <div className="md:col-start-3">
          <h4 className="font-label text-xs font-bold uppercase tracking-widest mb-8">
            Navigation
          </h4>
          <nav className="flex flex-col gap-4">
            {[
              "The Gallery",
              "Design Philosophy",
              "Materiality",
              "Our Process",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#3c475a] hover:text-[#e6c275] underline underline-offset-8 decoration-1 transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Newsletter — col 4 */}
        <div>
          <h4 className="font-label text-xs font-bold uppercase tracking-widest mb-8">
            Stay Inspired
          </h4>
          <div className="flex flex-col gap-6">
            <p className="text-sm text-on-secondary-fixed-variant">
              Subscribe to our blog for practical interiors, materials, and renovation insights.
            </p>
            <div className="flex border-b border-on-primary-fixed/20 pb-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-none focus:ring-0 outline-none text-sm w-full"
              />
              <button className="material-symbols-outlined text-on-primary-fixed">
                arrow_forward
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-12 py-12 border-t border-outline-variant/10 flex justify-between items-center font-label text-xs text-on-secondary-fixed-variant uppercase tracking-widest">
        <span>© 2024 Aurelian Collective. Built with Structural Poise.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-tertiary-fixed-dim transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-tertiary-fixed-dim transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
