export default function JournalFooter() {
  return (
    <footer className="bg-[#f6f3ee] text-[#131b2e]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-24 max-w-[1440px] mx-auto leading-relaxed">
        {/* Brand */}
        <div className="md:col-span-1">
          <span
            className="text-xl uppercase tracking-[0.1em] mb-8 block"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            AURELIAN
          </span>
          <p className="text-sm opacity-70">
            Redefining the boundaries of high-end construction through the lens
            of architectural minimalism and material integrity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-label text-xs font-bold uppercase tracking-widest mb-6">
            Quick Links
          </h5>
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

        {/* Studio */}
        <div>
          <h5 className="font-label text-xs font-bold uppercase tracking-widest mb-6">
            Studio
          </h5>
          <ul className="space-y-4">
            {["Our Process", "Contact"].map((link) => (
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
          <h5 className="font-label text-xs font-bold uppercase tracking-widest mb-6">
            Connect
          </h5>
          <div className="flex gap-6">
            {[
              { icon: "camera", label: "Instagram" },
              { icon: "work", label: "LinkedIn" },
              { icon: "mail", label: "Email" },
            ].map(({ icon, label }) => (
              <a
                key={icon}
                href="#"
                aria-label={label}
                className="text-[#3c475a] hover:text-[#e6c275] transition-colors"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12 py-8 border-t border-outline-variant/10 text-center text-xs opacity-50 font-label">
        © 2024 Aurelian Collective. Built with Structural Poise.
      </div>
    </footer>
  );
}
