import MotionReveal from "./MotionReveal";
import { Button, Container } from "./shared";

export default function CtaBand() {
  return (
    <section className="bg-[#ffc309] py-10 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:gap-12">
          <MotionReveal>
            <div>
              <h2 className="font-[var(--font-outfit)] text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.18] text-[#012c3d]">
                Let&apos;s Create Something <em className="italic">Exceptional</em>
              </h2>
              <p className="mt-2 text-[0.95rem] font-light text-[#012c3d]/55">
                Connect with Fourwalls Interiors &amp; Constructions today and take the first step toward transforming your space into something extraordinary.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delayMs={120}>
            <Button href="#contact" variant="navy">
              Get Free Consultation
            </Button>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
