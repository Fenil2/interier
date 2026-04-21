const navLinks = ["The Gallery", "Design Philosophy", "Materiality"];
const companyLinks = ["Our Process", "Contact", "Privacy Policy"];

export default function ServicesFooter() {
  return (
    <footer className="bg-[#f6f3ee] border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-24 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <span
            className="text-xl uppercase tracking-[0.1em] text-[#131b2e] block mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            AURELIAN
          </span>
          <p className="text-[#3c475a] text-sm leading-relaxed opacity-80">
            A multi-disciplinary studio dedicated to the craft of enduring spaces.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-[#131b2e]">
            Navigation
          </h5>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#3c475a] hover:text-[#e6c275] underline underline-offset-8 decoration-1 transition-all"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-[#131b2e]">
            Company
          </h5>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#3c475a] hover:text-[#e6c275] underline underline-offset-8 decoration-1 transition-all"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-[#131b2e]">
            Connect
          </h5>
          <div className="flex gap-4">
            {["share", "mail"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-on-primary-fixed hover:text-surface transition-colors"
              >
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </a>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/30">
            <p className="text-[0.65rem] text-[#3c475a] uppercase tracking-widest font-bold">
              Inquiries
            </p>
            <p className="text-sm font-medium text-[#131b2e]">
              studio@aureliancollective.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12 py-8 max-w-[1440px] mx-auto border-t border-outline-variant/10">
        <p className="text-xs text-[#3c475a] font-medium opacity-60">
          © 2024 Aurelian Collective. Built with Structural Poise.
        </p>
      </div>
    </footer>
  );
}
