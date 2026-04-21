const navLinks = ["The Gallery", "Design Philosophy", "Materiality", "Our Process"];
const connectLinks = ["Instagram", "LinkedIn", "Blog"];

export default function AboutFooter() {
  return (
    <footer className="bg-[#f6f3ee] text-[#131b2e] border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-24 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <span
            className="text-xl uppercase tracking-[0.1em] text-[#131b2e] block mb-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            AURELIAN
          </span>
          <p className="text-on-secondary-fixed-variant text-sm leading-relaxed opacity-70">
            A boutique collective of architects and master builders dedicated to
            the pursuit of structural perfection.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="font-label text-xs uppercase tracking-widest text-on-primary-fixed mb-8">
            Navigation
          </h5>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = link === "Design Philosophy";
              return (
                <li key={link}>
                  <a
                    href="#"
                    className={
                      isActive
                        ? "text-[#e6c275]"
                        : "text-[#3c475a] hover:text-[#e6c275] underline underline-offset-8 decoration-1 transition-all duration-300"
                    }
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-label text-xs uppercase tracking-widest text-on-primary-fixed mb-8">
            Connect
          </h5>
          <ul className="flex flex-col gap-4">
            {connectLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#3c475a] hover:text-[#e6c275] transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h5 className="font-label text-xs uppercase tracking-widest text-on-primary-fixed mb-8">
            Offices
          </h5>
          <p className="text-on-secondary-fixed-variant text-sm leading-relaxed mb-4">
            Limestone House, 12th Floor
            <br />
            Creative Quarter, London
          </p>
          <p className="text-on-secondary-fixed-variant text-sm leading-relaxed">
            Studio 404, Arts District
            <br />
            Berlin, Germany
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12 py-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="text-[0.6875rem] uppercase tracking-widest text-on-secondary-fixed-variant opacity-60">
          © 2024 Aurelian Collective. Built with Structural Poise.
        </p>
      </div>
    </footer>
  );
}
