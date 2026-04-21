const directoryLinks = [
  "The Gallery",
  "Design Philosophy",
  "Materiality",
  "Our Process",
  "Contact",
];

export default function PortfolioFooter() {
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
          <p className="text-on-secondary-fixed-variant text-sm mb-6">
            Crafting digital and physical landscapes with architectural
            precision since 2008.
          </p>
          <div className="flex gap-4">
            {["share", "public", "mail"].map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined text-xl cursor-pointer hover:text-[#e6c275] transition-colors"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Directory */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6">
            Directory
          </h4>
          <nav className="flex flex-col gap-3">
            {directoryLinks.map((link) => (
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

        {/* Offices */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6">
            Offices
          </h4>
          <div className="text-[#3c475a]">
            <p className="font-bold">Zurich Studio</p>
            <p className="text-sm opacity-80">Bahnhofstrasse 12, 8001 Zurich</p>
          </div>
          <div className="text-[#3c475a] mt-4">
            <p className="font-bold">London Atelier</p>
            <p className="text-sm opacity-80">24 Bruton St, London W1J 6QQ</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6">
            Insights
          </h4>
          <div className="bg-white/50 p-6 rounded-sm border border-outline-variant/10">
            <p className="text-xs text-[#e6c275] mb-2 uppercase tracking-widest">
              Newsletter
            </p>
            <p className="text-sm mb-4">
              Curated architectural updates delivered monthly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-on-primary-fixed/20 focus:border-[#e6c275] outline-none text-sm py-2 w-full transition-colors"
              />
              <button className="material-symbols-outlined text-[#e6c275]">
                arrow_forward
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12 py-8 border-t border-outline-variant/10 max-w-[1440px] mx-auto flex justify-between items-center text-xs opacity-60">
        <span>© 2024 Aurelian Collective. Built with Structural Poise.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
