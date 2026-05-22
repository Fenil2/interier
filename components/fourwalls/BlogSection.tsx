import Image from "next/image";
import MotionReveal from "./MotionReveal";
import { ArrowLink, BodyText, Container, SectionHeading, SectionTag } from "./shared";

type BlogPostItem = [string, string, string, string, string, string, string];

const posts: BlogPostItem[] = [
  [
    "About Us",
    "About Fourwalls Interiors & Constructions",
    "Fourwalls Interiors & Constructions is dedicated to designing and building spaces that reflect both functionality and aesthetic appeal.",
    "#c8a856",
    "bg-[#c8a8561a] text-[#c8a856]",
    "/Gemini_Generated_Image_qoi7jvqoi7jvqoi7.jpg",
    "Custom Wood Grain TV Unit with Glass Display"
  ],
  [
    "Our Services",
    "Interior and Construction Solutions",
    "We create customized interior designs, provide complete construction solutions, and deliver turnkey project execution.",
    "#c8a856",
    "bg-[#c8a8561a] text-[#c8a856]",
    "/Gemini_Generated_Image_czju7nczju7nczju.jpg",
    "Bathroom Interior with Maroon Mirror Cabinet"
  ],
  [
    "Why Choose Us",
    "What Makes Us Different",
    "Proven experience, dedicated project management, high quality materials, customized design approach, clear communication, and timely delivery.",
    "#c8a856",
    "bg-[#c8a8561a] text-[#c8a856]",
    "/Gemini_Generated_Image_yyrngryyrngryyrn.jpg",
    "Modern Bedroom Wardrobe in Grey and Yellow"
  ]
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#f5f3ee] py-10 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <MotionReveal>
              <SectionTag>Blog</SectionTag>
            </MotionReveal>
            <MotionReveal delayMs={100}>
              <SectionHeading>
                Design Ideas &amp; <em className="text-[#c8a856]">Insights</em>
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
              className="cinematic-panel overflow-hidden rounded-[14px] border border-[#1a2e2012] bg-white shadow-[0_2px_12px_rgba(26,46,32,0.04)] transition-all duration-300"
            >
              <div className="relative h-45 overflow-hidden sm:h-50">
                <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ backgroundColor: stripe }} />
                <Image src={image} alt={alt} fill className="cinematic-image object-cover transition-transform duration-700" />
              </div>
              <div className="p-7">
                <span className={`mb-3 inline-flex rounded-full px-3 py-[0.28rem] text-[0.67rem] font-semibold uppercase tracking-[0.14em] ${tagClasses}`}>
                  {tag}
                </span>
                <h3 className="mb-3 font-(family-name:--font-outfit) text-[1.12rem] font-bold leading-[1.35] text-[#1a2e20]">
                  {title}
                </h3>
                <p className="text-[0.84rem] font-light leading-[1.75] text-[#6a8870]">{text}</p>
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
