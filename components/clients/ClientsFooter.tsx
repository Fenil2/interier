export default function ClientsFooter() {
  return (
    <footer className="bg-[#f6f3ee] border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <span
            className="text-xl uppercase tracking-[0.1em] text-[#131b2e] block mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            AURELIAN
          </span>
          <p className="text-[#3c475a] leading-relaxed text-body-lg">
            Architectural excellence through minimalist precision and material
            honesty.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-label text-xs text-on-primary-fixed mb-8 uppercase tracking-widest">
            Navigation
          </p>
          <ul className="space-y-4">
            {["The Gallery", "Design Philosophy", "Materiality"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#3c475a] hover:text-[#e6c275] underline underline-offset-8 decoration-1 transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="font-label text-xs text-on-primary-fixed mb-8 uppercase tracking-widest">
            Connect
          </p>
          <ul className="space-y-4">
            {["Our Process", "Contact", "Instagram"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#3c475a] hover:text-[#e6c275] underline underline-offset-8 decoration-1 transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-label text-xs text-on-primary-fixed mb-8 uppercase tracking-widest">
            Newsletter
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-on-secondary-fixed-variant py-2 focus:border-tertiary-fixed-dim focus:ring-0 outline-none transition-colors"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-on-primary-fixed">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-12 py-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="text-sm text-on-secondary-fixed-variant">
          © 2024 Aurelian Collective. Built with Structural Poise.
        </p>
      </div>
    </footer>
  );
}
