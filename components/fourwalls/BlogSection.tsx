import Image from "next/image";
import MotionReveal from "./MotionReveal";
import { ArrowLink, BodyText, Container, SectionHeading, SectionTag } from "./shared";

type BlogPostItem = [string, string, string, string, string, string, string];

const posts: BlogPostItem[] = [
  [
    "About Us",
    "About Fourwalls Interiors & Constructions",
    "Fourwalls Interiors & Constructions is dedicated to designing and building spaces that reflect both functionality and aesthetic appeal.",
    "#01c1ff",
    "bg-[#01c1ff1a] text-[#0099cc]",
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80",
    "About Fourwalls Interiors & Constructions"
  ],
  [
    "Our Services",
    "Interior and Construction Solutions",
    "We create customized interior designs, provide complete construction solutions, and deliver turnkey project execution.",
    "#00dfd7",
    "bg-[#00dfd71a] text-[#00b5ae]",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    "Interior and Construction Solutions"
  ],
  [
    "Why Choose Us",
    "What Makes Us Different",
    "Proven experience, dedicated project management, high quality materials, customized design approach, clear communication, and timely delivery.",
    "#f9693a",
    "bg-[#f9693a1a] text-[#d44e23]",
    "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&q=80",
    "What Makes Us Different"
  ]
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#f3fafd] py-10 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <MotionReveal>
              <SectionTag>Blog</SectionTag>
            </MotionReveal>
            <MotionReveal delayMs={100}>
              <SectionHeading>
                Design Ideas &amp; <em className="text-[#01c1ff]">Insights</em>
              </SectionHeading>
            </MotionReveal>
            <MotionReveal delayMs={180}>
              <BodyText className="mt-2">
                Stay updated with the latest trends, tips, and ideas in interior design and construction.
              </BodyText>
            </MotionReveal>
          </div>
          <MotionReveal delayMs={220}>
            <ArrowLink href="#blog" className="whitespace-nowrap">
              Design Ideas and Insights
            </ArrowLink>
          </MotionReveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(([tag, title, text, stripe, tagClasses, image, alt], index) => (
            <MotionReveal
              key={title}
              delayMs={index * 100}
              className="cinematic-panel overflow-hidden rounded-[14px] border border-[#012c3d12] bg-white shadow-[0_2px_12px_rgba(1,44,61,0.04)] transition-all duration-300"
            >
              <div className="relative h-45 overflow-hidden sm:h-50">
                <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ backgroundColor: stripe }} />
                <Image src={image} alt={alt} fill className="cinematic-image object-cover transition-transform duration-700" />
              </div>
              <div className="p-7">
                <span className={`mb-3 inline-flex rounded-full px-3 py-[0.28rem] text-[0.67rem] font-semibold uppercase tracking-[0.14em] ${tagClasses}`}>
                  {tag}
                </span>
                <h3 className="mb-3 font-[var(--font-outfit)] text-[1.12rem] font-bold leading-[1.35] text-[#012c3d]">
                  {title}
                </h3>
                <p className="text-[0.84rem] font-light leading-[1.75] text-[#5f8a9f]">{text}</p>
                <ArrowLink href="#blog" className="mt-[1.1rem]">
                  Design Ideas and Insights
                </ArrowLink>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
