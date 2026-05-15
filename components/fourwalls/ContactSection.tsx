import type { ReactNode } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  YoutubeIcon
} from "./icons";
import MotionReveal from "./MotionReveal";
import { Container, SectionHeading, SectionTag } from "./shared";

type ContactItem = [string, string, string, ReactNode];
type SocialItem = [string, ReactNode];

const contactItems: ContactItem[] = [
  ["Phone", "+91 XXXXX XXXXX", "bg-[#01c1ff1f]", <PhoneIcon key="phone" />],
  ["Email", "hello@fourwalls.in", "bg-[#00dfd71f]", <MailIcon key="mail" />],
  ["Office", "Chennai, Tamil Nadu", "bg-[#ffc3091f]", <PinIcon key="pin" />]
];

const socials: SocialItem[] = [
  ["Instagram", <InstagramIcon key="instagram" />],
  ["Facebook", <FacebookIcon key="facebook" />],
  ["LinkedIn", <LinkedInIcon key="linkedin" />],
  ["YouTube", <YoutubeIcon key="youtube" />]
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#012c3d] py-10 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-20">
          <div>
            <MotionReveal>
              <SectionTag>Get In Touch</SectionTag>
            </MotionReveal>
            <MotionReveal delayMs={100}>
              <SectionHeading light className="mb-0">
                Have a Project
                <br />
                <em className="text-[#ffc309]">in Mind?</em>
              </SectionHeading>
            </MotionReveal>
            <MotionReveal delayMs={180}>
              <p className="my-4 mb-10 text-[0.95rem] font-light leading-[1.82] text-white/42">
                Have a project in mind? Reach out to Fourwalls Interiors &amp; Constructions and let us help you
                bring your vision to life.
              </p>
            </MotionReveal>

            <div className="flex flex-col gap-5">
              {contactItems.map(([label, value, bg, icon], index) => (
                <MotionReveal key={label} delayMs={260 + index * 90} className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${bg}`}>{icon}</div>
                  <div>
                    <div className="mb-1 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#01c1ff]">{label}</div>
                    <div className="text-[0.95rem] text-white/70">
                      {value}
                      {label === "Office" ? (
                        <>
                          <br />
                          <span className="text-[0.82rem] text-[#5f8a9f]">Service Areas Across South India</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>

            <MotionReveal delayMs={520} className="mt-8 flex flex-wrap gap-3">
              {socials.map(([label, icon]) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-[#01c1ff24] px-4 py-2 text-[0.78rem] font-medium text-white/60 transition-all duration-200"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </MotionReveal>
          </div>

          <MotionReveal variant="right" delayMs={120}>
            <form className="rounded-[14px] border border-[#01c1ff14] bg-white/4 p-4 sm:p-6">
              <div className="grid gap-2.5 md:grid-cols-2">
                <Field label="First Name" placeholder="Your first name" />
                <Field label="Last Name" placeholder="Your last name" />
              </div>
              <Field label="Email Address" placeholder="your@email.com" type="email" />
              <Field label="Phone Number" placeholder="+91 XXXXX XXXXX" type="tel" />
              <div className="mt-2.5">
                <label className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                  Service Required
                </label>
                <select className="w-full appearance-none rounded-md border border-white/10 bg-[#01384f] px-3.5 py-[0.55rem] text-[0.88rem] text-white/70 outline-none transition-colors duration-200 focus:border-[#01c1ff66]">
                  <option>Select a service...</option>
                  <option>Interior Design</option>
                  <option>Construction Services</option>
                  <option>Modular Kitchen / Wardrobe</option>
                  <option>Renovation &amp; Remodeling</option>
                  <option>Turnkey Project</option>
                </select>
              </div>
              <div className="mt-2.5">
                <label className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                  Tell Us About Your Project
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your space, requirements, timeline, budget range..."
                  className="w-full resize-none rounded-md border border-white/10 bg-[#01384f] px-3.5 py-[0.55rem] text-[0.88rem] text-white/70 outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-[#01c1ff66]"
                />
              </div>
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ffc309] px-7 py-[0.6rem] text-[0.8rem] font-semibold tracking-[0.06em] text-[#012c3d] transition-all duration-200 sm:w-auto sm:justify-start"
              >
                Get Free Consultation
              </button>
              <p className="mt-2 text-[0.72rem] text-white/38">
                We respond within 24 hours. Your information is kept strictly confidential.
              </p>
            </form>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text"
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="mt-2.5">
      <label className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-white/10 bg-[#01384f] px-3.5 py-[0.55rem] text-[0.88rem] text-white/70 outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-[#01c1ff66]"
      />
    </div>
  );
}
