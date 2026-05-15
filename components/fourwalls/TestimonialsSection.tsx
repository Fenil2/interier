import MotionReveal from "./MotionReveal";
import { BodyText, Container, SectionHeading, SectionTag } from "./shared";

type TestimonialItem = [string, string, string, string, string];

const testimonials: TestimonialItem[] = [
  [
    "RC",
    "Residential Client",
    "South India",
    "#01c1ff",
    "Our clients are at the heart of everything we do. Their satisfaction and trust motivate us to deliver better with every project."
  ],
  [
    "CC",
    "Commercial Client",
    "South India",
    "#00dfd7",
    "We take pride in delivering satisfaction through quality work and professional service."
  ],
  [
    "TC",
    "Turnkey Client",
    "South India",
    "#ffc309",
    "Our clients trust us for our commitment and results."
  ]
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#012c3d] py-10 md:py-24">
      <Container>
        <div className="mb-14 text-center">
          <MotionReveal>
            <SectionTag centered noLine>
              Testimonials
            </SectionTag>
          </MotionReveal>
          <MotionReveal delayMs={100}>
            <SectionHeading light className="mb-3">
              What Our <em className="text-[#ffc309]">Clients Say</em>
            </SectionHeading>
          </MotionReveal>
          <MotionReveal delayMs={180}>
            <BodyText light className="mx-auto text-center">
              We take pride in delivering satisfaction through quality work and professional service. Our clients trust us for our commitment and results.
            </BodyText>
          </MotionReveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(([initials, name, location, color, text], index) => (
            <MotionReveal
              key={name}
              delayMs={index * 110}
              className="relative rounded-[14px] border border-[#01c1ff1a] bg-white/[0.04] p-6 transition-all duration-300 sm:p-9"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="text-[0.88rem] tracking-[0.05em] text-[#ffc309]">*****</div>
                <div className="font-[var(--font-outfit)] text-[3.5rem] leading-none text-[#01c1ff]/20">&quot;</div>
              </div>
              <p className="mb-7 text-[0.91rem] font-light italic leading-[1.82] text-white/58">{text}</p>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full text-[0.84rem] font-semibold" style={{ backgroundColor: `${color}26`, color }}>
                  {initials}
                </div>
                <div>
                  <div className="mb-0.5 text-[0.88rem] font-semibold text-white">{name}</div>
                  <div className="text-[0.74rem] text-white/28">{location}</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-[2px]" style={{ backgroundColor: color }} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
