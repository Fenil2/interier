import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Fourwalls Interiors & Constructions",
  description: "Learn how Fourwalls Interiors & Constructions collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you fill out our contact or enquiry form, we collect personal details including your first name, last name, email address, phone number, the service you are interested in, and any additional message you provide.",
      "We may also collect non-personal information such as browser type, device type, pages visited, and time spent on our website through standard web analytics tools. This information helps us understand how visitors use our site.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information you provide to respond to your enquiry, schedule consultations, and communicate with you about our interior design and construction services.",
      "Your contact details may be used to send you updates about your project, follow-up messages, or information about our services that may be relevant to you. We do not send unsolicited marketing emails.",
      "Aggregated, non-identifiable analytics data is used solely to improve our website's performance and user experience.",
    ],
  },
  {
    title: "Data Storage & Security",
    content: [
      "Your enquiry data is stored securely in our database hosted on Neon (PostgreSQL), a trusted cloud database provider. Access to this data is restricted to authorised Fourwalls team members only.",
      "We implement industry-standard security measures including encrypted connections (SSL/TLS) and access controls to protect your personal information from unauthorised access, disclosure, or loss.",
      "Despite our best efforts, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security, but we take every reasonable precaution.",
    ],
  },
  {
    title: "Sharing of Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share your information with trusted service providers who assist us in operating our website or conducting our business (e.g., database hosting), provided they agree to keep your information confidential.",
      "We may disclose your information if required by law, regulation, or a valid legal process.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you navigate our site.",
      "You can choose to disable cookies through your browser settings. However, doing so may affect certain functionality of our website.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites such as social media platforms. We are not responsible for the privacy practices or content of those external sites. We encourage you to read the privacy policies of any site you visit.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to request access to the personal information we hold about you, to request corrections if any information is inaccurate, or to request that we delete your data from our records.",
      "To exercise any of these rights, please contact us at shyam.fourwalls@gmail.com. We will respond to your request within a reasonable timeframe.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our services are intended for adults. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected such information, please contact us immediately so we can delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The updated policy will be posted on this page with a revised effective date. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your data, please reach out to us:",
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ee]">
      {/* Nav bar */}
      <header className="sticky top-0 z-50 border-b border-[#1a2e20]/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="text-[0.95rem] font-bold tracking-tight text-[#1a2e20]">
            Fourwalls <span className="text-[#c8a856]">Interiors</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#1a2e20]/15 px-5 py-2 text-[0.78rem] font-semibold text-[#1a2e20] transition-all hover:bg-[#1a2e20] hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#1a2e20] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 inline-block rounded-full border border-[#c8a85640] px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-widest text-[#c8a856]">
            Legal
          </div>
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/50">
            We respect your privacy and are committed to protecting your personal information. This policy explains what we collect, how we use it, and your rights.
          </p>
          <p className="mt-5 text-[0.78rem] text-[#6a8870]">
            Effective Date: <span className="text-[#c8a856]">1 January 2025</span> &nbsp;·&nbsp; Last Updated: <span className="text-[#c8a856]">22 May 2026</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-5 py-12 md:px-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-14">

          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-[#1a2e20]/10 bg-white p-5 shadow-sm">
              <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-widest text-[#6a8870]">Contents</p>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.title}>
                    <a
                      href={`#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-[0.8rem] text-[#1a2e20]/60 transition-colors hover:text-[#c8a856]"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div
                key={section.title}
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24 rounded-xl border border-[#1a2e20]/8 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1a2e20] text-[0.7rem] font-bold text-[#c8a856]">
                    {i + 1}
                  </span>
                  <h2 className="text-[1.05rem] font-bold text-[#1a2e20] md:text-[1.15rem]">{section.title}</h2>
                </div>
                <div className="space-y-3 pl-10">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-[0.9rem] leading-[1.85] text-[#1e2e22]/70">
                      {para}
                    </p>
                  ))}
                  {section.contact && (
                    <div className="mt-4 rounded-lg bg-[#f5f3ee] p-4">
                      <p className="mb-1 text-[0.85rem] font-semibold text-[#1a2e20]">Fourwalls Interiors &amp; Constructions</p>
                      <p className="text-[0.85rem] text-[#1e2e22]/70">#2/801, ISHA COMPLEX, Mambakkam, Chennai 600127</p>
                      <p className="text-[0.85rem] text-[#1e2e22]/70">Near SBIOA Unity Enclave, Mambakkam</p>
                      <a href="mailto:shyam.fourwalls@gmail.com" className="mt-1 block text-[0.85rem] font-medium text-[#c8a856] hover:underline">
                        shyam.fourwalls@gmail.com
                      </a>
                      <a href="tel:+919994095771" className="block text-[0.85rem] text-[#1e2e22]/70">
                        +91 9994095771 / 7010171817
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-[#1a2e20]/10 bg-[#1a2e20] px-5 py-6 text-center">
        <p className="text-[0.78rem] text-[#6a8870]">
          © {new Date().getFullYear()} Fourwalls Interiors &amp; Constructions. All rights reserved.
          &nbsp;·&nbsp;
          <Link href="/" className="text-[#c8a856] hover:underline">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
