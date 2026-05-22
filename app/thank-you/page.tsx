import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — Fourwalls Interiors & Constructions",
  description: "Thank you for reaching out to Fourwalls Interiors & Constructions. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ee]">
      {/* Nav */}
      <header className="border-b border-[#1a2e20]/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="text-[0.95rem] font-bold tracking-tight text-[#1a2e20]">
            Fourwalls <span className="text-[#c8a856]">Interiors</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#1a2e20]/15 px-5 py-2 text-[0.78rem] font-semibold text-[#1a2e20] transition-all hover:bg-[#1a2e20] hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main content — centred vertically */}
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="w-full max-w-lg text-center">

          {/* Icon */}
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#1a2e20] shadow-lg shadow-[#1a2e20]/20 md:h-24 md:w-24">
            <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="#c8a856" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#1a2e20] md:text-4xl">
            Thank You!
          </h1>
          <p className="mt-2 text-lg font-medium text-[#c8a856] md:text-xl">
            We&apos;ve received your enquiry.
          </p>

          {/* Body */}
          <p className="mt-5 text-[0.95rem] leading-[1.85] text-[#1e2e22]/60">
            Our team at <strong className="text-[#1a2e20]">Fourwalls Interiors &amp; Constructions</strong> will review your project details and get back to you within <strong className="text-[#1a2e20]">24 hours</strong>.
          </p>
          <p className="mt-3 text-[0.9rem] leading-relaxed text-[#1e2e22]/50">
            In the meantime, feel free to explore our portfolio or reach out to us directly if your project is urgent.
          </p>

          {/* Contact card */}
          <div className="mx-auto mt-8 rounded-xl border border-[#1a2e20]/10 bg-white p-6 shadow-sm">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">
              Reach us directly
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href="tel:+919994095771"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#1a2e20]/10 px-4 py-3 text-[0.88rem] font-medium text-[#1a2e20] transition-all hover:bg-[#1a2e20] hover:text-white"
              >
                <PhoneIcon />
                +91 9994095771
              </a>
              <a
                href="tel:+917010171817"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#1a2e20]/10 px-4 py-3 text-[0.88rem] font-medium text-[#1a2e20] transition-all hover:bg-[#1a2e20] hover:text-white"
              >
                <PhoneIcon />
                +91 7010171817
              </a>
            </div>
            <a
              href="mailto:shyam.fourwalls@gmail.com"
              className="mt-3 flex items-center justify-center gap-2 text-[0.85rem] text-[#c8a856] hover:underline"
            >
              <MailIcon />
              shyam.fourwalls@gmail.com
            </a>
          </div>

          {/* What happens next */}
          <div className="mt-8 rounded-xl border border-[#1a2e20]/8 bg-white p-6 text-left shadow-sm">
            <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">
              What happens next
            </p>
            <ol className="space-y-4">
              {[
                ["Review", "We review your project requirements and service interest."],
                ["Contact", "A Fourwalls consultant calls or emails you within 24 hours."],
                ["Consultation", "We schedule a free consultation to understand your space and vision."],
                ["Proposal", "You receive a detailed design plan and cost estimate."],
              ].map(([step, desc], i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a2e20] text-[0.68rem] font-bold text-[#c8a856]">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-[0.88rem] font-semibold text-[#1a2e20]">{step} — </span>
                    <span className="text-[0.88rem] text-[#1e2e22]/60">{desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1a2e20] px-7 py-3 text-[0.88rem] font-semibold text-white transition-all hover:bg-[#142218]"
            >
              ← Back to Home
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1a2e20]/15 px-7 py-3 text-[0.88rem] font-semibold text-[#1a2e20] transition-all hover:bg-[#1a2e20] hover:text-white"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-[#1a2e20]/10 bg-[#1a2e20] px-5 py-5 text-center">
        <p className="text-[0.78rem] text-[#6a8870]">
          © {new Date().getFullYear()} Fourwalls Interiors &amp; Constructions · Chennai
          &nbsp;·&nbsp;
          <Link href="/privacy-policy" className="text-[#c8a856] hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
