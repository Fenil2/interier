import FadeIn from "../animations/FadeIn";

const posts = [
  {
    category: "Materials",
    title: "Choosing Stone, Wood, and Metal Without Overcrowding a Room",
    excerpt:
      "A simple framework for balancing warm and cool finishes in premium interiors.",
    readTime: "5 Min Read",
    src: "https://images.pexels.com/photos/7195552/pexels-photo-7195552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Interior material palette with wood and stone textures",
  },
  {
    category: "Renovation",
    title: "Renovation Sequencing: What Should Happen First?",
    excerpt:
      "The order of demolition, services, waterproofing, carpentry, and finishing work matters more than most budgets assume.",
    readTime: "7 Min Read",
    src: "https://images.pexels.com/photos/7535031/pexels-photo-7535031.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Renovated kitchen with clean modern cabinetry",
  },
  {
    category: "Construction",
    title: "Why Site Supervision Changes the Final Finish",
    excerpt:
      "Quality interiors depend on the invisible work: measurement checks, service routes, curing time, and vendor coordination.",
    readTime: "6 Min Read",
    src: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Architectural construction site with active building work",
  },
  {
    category: "Interiors",
    title: "Lighting Layers That Make a Living Room Feel Complete",
    excerpt:
      "Ambient, task, and accent lighting should be planned as a system, not selected at the end.",
    readTime: "4 Min Read",
    src: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Modern residential room with soft natural light",
  },
  {
    category: "Planning",
    title: "Five Questions to Ask Before Starting a Turnkey Project",
    excerpt:
      "Clarity around scope, procurement, timelines, drawings, and approvals protects both the budget and the design intent.",
    readTime: "8 Min Read",
    src: "https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Modern workspace interior with planning table",
  },
  {
    category: "Design Tips",
    title: "How to Make Compact Homes Feel Larger",
    excerpt:
      "Use continuous flooring, clean storage lines, reflective surfaces, and fewer visual interruptions.",
    readTime: "5 Min Read",
    src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Compact home interior with open kitchen and living area",
  },
];

export default function BentoInsightsSection() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="px-4 sm:px-8 max-w-[1440px] mx-auto">
        <FadeIn direction="up" className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow mb-5">Latest Articles</span>
            <h3
              className="text-[2.2rem] font-bold leading-tight text-[#131b2e] md:text-[3rem]"
              style={{ fontFamily: "var(--font-noto-serif), serif" }}
            >
              Blog Posts from the Studio
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#3c475a] md:text-base">
            Helpful reads for homeowners, founders, and project teams planning
            interiors, renovation, or construction work.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn
              key={post.title}
              direction="up"
              delay={index * 0.06}
              className="group overflow-hidden rounded-md border border-[#131b2e]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#f0ede9]">
                <img
                  alt={post.alt}
                  src={post.src}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="font-label text-[0.68rem] font-bold uppercase tracking-widest text-[#9e803a]">
                    {post.category}
                  </span>
                  <span className="font-label text-[0.68rem] uppercase tracking-widest text-[#76777d]">
                    {post.readTime}
                  </span>
                </div>
                <h4
                  className="mb-3 text-[1.45rem] font-bold leading-tight text-[#131b2e]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {post.title}
                </h4>
                <p className="mb-6 text-sm leading-relaxed text-[#3c475a]">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-[#131b2e] transition-colors hover:text-[#9e803a]"
                >
                  Read Article
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
