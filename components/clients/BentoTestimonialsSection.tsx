import FadeIn from "../animations/FadeIn";

const testimonials = [
  {
    name: "Marcus Vane",
    role: "Lead Architect, Studio V",
    quote:
      "Aurelian's command of materiality is rare. Their detailing around stone, wood, and lighting gave our project a level of restraint we could not have achieved alone.",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Jenkins Developments",
    quote:
      "Their site coordination is the reason we trust them with complex builds. Every stage was documented, measured, and handled with discipline.",
  },
  {
    name: "David O'Hara",
    role: "Private Residence, Ooty",
    quote:
      "They managed the entire construction process with precision. The weekly updates were clear, the costs were transparent, and the final finish was beautiful.",
  },
  {
    name: "Linda Chen",
    role: "Interior Stylist",
    quote:
      "Working with the team felt like a real partnership. They protected the design intent while still solving practical site constraints quickly.",
  },
  {
    name: "Robert Fletcher",
    role: "The Loft Project",
    quote:
      "The process was as polished as the result. They anticipated problems early and made the final handover feel effortless.",
  },
  {
    name: "Ananya Rao",
    role: "Founder, Clay & Co.",
    quote:
      "Our studio needed warmth without losing operational efficiency. Aurelian delivered a commercial space that clients remember.",
  },
];

function Stars() {
  return (
    <div className="mb-5 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-sm text-[#e6c275]">
          star
        </span>
      ))}
    </div>
  );
}

export default function BentoTestimonialsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 mb-16 md:mb-28">
      <FadeIn direction="up" className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow mb-5">Client Notes</span>
          <h2
            className="text-[2.2rem] font-bold leading-tight text-[#131b2e] md:text-[3rem]"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            What Clients Value Most
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#3c475a] md:text-base">
          A collection of feedback from homeowners, founders, architects, and
          development teams who trusted us with meaningful spaces.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item, index) => (
          <FadeIn
            key={item.name}
            direction="up"
            delay={index * 0.06}
            className="flex min-h-[280px] flex-col justify-between rounded-md border border-[#131b2e]/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
          >
            <div>
              <Stars />
              <p className="text-base leading-relaxed text-[#3c475a]">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
            <div className="mt-8 border-t border-[#131b2e]/10 pt-5">
              <p className="font-bold text-[#131b2e]">{item.name}</p>
              <p className="mt-1 font-label text-[0.68rem] uppercase tracking-widest text-[#76777d]">
                {item.role}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
