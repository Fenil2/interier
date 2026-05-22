"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
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
  ["Phone", "+91 9994095771 / 7010171817", "bg-[#c8a8561f]", <PhoneIcon key="phone" />],
  ["Email", "shyam.fourwalls@gmail.com", "bg-[#c8a8561f]", <MailIcon key="mail" />],
  ["Office", "#2/801, ISHA COMPLEX, Mambakkam, Chennai 600127", "bg-[#c8a8561f]", <PinIcon key="pin" />]
];

const socials: SocialItem[] = [
  ["Instagram", <InstagramIcon key="instagram" />],
  ["Facebook", <FacebookIcon key="facebook" />],
  ["LinkedIn", <LinkedInIcon key="linkedin" />],
  ["YouTube", <YoutubeIcon key="youtube" />]
];

type FormState = "idle" | "loading" | "error";

export default function ContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, service, message }),
      });
      if (!res.ok) throw new Error("Failed");
      router.push("/thank-you");
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="bg-[#1a2e20] py-10 md:py-24">
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
                <em className="text-[#c8a856]">in Mind?</em>
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
                    <div className="mb-1 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#c8a856]">{label}</div>
                    <div className="text-[0.95rem] text-white/70">
                      {value}
                      {label === "Office" ? (
                        <>
                          <br />
                          <span className="text-[0.82rem] text-[#6a8870]">Near SBIOA Unity Enclave, Mambakkam</span>
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
                  className="inline-flex items-center gap-2 rounded-full border border-[#c8a85624] px-4 py-2 text-[0.78rem] font-medium text-white/60 transition-all duration-200"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </MotionReveal>
          </div>

          <MotionReveal variant="right" delayMs={120}>
            <form onSubmit={handleSubmit} className="rounded-[14px] border border-[#c8a85614] bg-white/4 p-4 sm:p-6">
              {formState === "error" && (
                <div className="mb-4 rounded-md bg-red-900/20 border border-red-500/30 px-4 py-3 text-[0.88rem] text-red-400">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
              <div className="grid gap-2.5 md:grid-cols-2">
                <Field label="First Name" placeholder="Your first name" value={firstName} onChange={setFirstName} required />
                <Field label="Last Name" placeholder="Your last name" value={lastName} onChange={setLastName} required />
              </div>
              <Field label="Email Address" placeholder="your@email.com" type="email" value={email} onChange={setEmail} required />
              <Field label="Phone Number" placeholder="+91 9994095771" type="tel" value={phone} onChange={setPhone} required />
              <div className="mt-2.5">
                <label className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                  Service Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full appearance-none rounded-md border border-white/10 bg-[#142218] px-3.5 py-[0.55rem] text-[0.88rem] text-white/70 outline-none transition-colors duration-200 focus:border-[#c8a85666]"
                >
                  <option value="">Select a service...</option>
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your space, requirements, timeline, budget range..."
                  className="w-full resize-none rounded-md border border-white/10 bg-[#142218] px-3.5 py-[0.55rem] text-[0.88rem] text-white/70 outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-[#c8a85666]"
                />
              </div>
              <button
                type="submit"
                disabled={formState === "loading"}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#c8a856] px-7 py-[0.6rem] text-[0.8rem] font-semibold tracking-[0.06em] text-[#1a2e20] transition-all duration-200 disabled:opacity-60 sm:w-auto sm:justify-start"
              >
                {formState === "loading" ? "Sending…" : "Get Free Consultation"}
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
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="mt-2.5">
      <label className="mb-1.5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-white/10 bg-[#142218] px-3.5 py-[0.55rem] text-[0.88rem] text-white/70 outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-[#c8a85666]"
      />
    </div>
  );
}
