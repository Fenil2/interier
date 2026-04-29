import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Fourwalls Constructions & Interiors",
  description:
    "Review how Fourwalls Constructions & Interiors collects, uses, and protects your personal information.",
};

const policySections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect your name, phone number, email address, project location, and any details you share when you contact us for interior or construction services.",
      "We may also receive technical information such as browser type, device data, and general website usage patterns to improve site performance and user experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, prepare consultations, share project updates, and provide interior design or construction-related support.",
      "Your details may also be used to improve our services, maintain records of conversations, and send relevant follow-up communication regarding your project.",
    ],
  },
  {
    title: "Sharing Of Information",
    body: [
      "We do not sell your personal information. We may share limited details with trusted vendors, consultants, or project partners only when it is necessary to deliver our services.",
      "We may also disclose information if required by law, regulation, or to protect our legal rights.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure.",
      "While we work to safeguard your data, no online transmission or storage method can be guaranteed as completely secure.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may request updates or corrections to the personal information you have shared with us.",
      "If you no longer want us to keep in touch about your enquiry, you can contact us and request removal from future communication.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "This privacy policy may be updated from time to time to reflect changes in our practices, services, or legal requirements.",
      "Any revised version will be posted on this page with the latest effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f6f3ee] pt-28 pb-16 md:pb-24">
        <section className="px-4 sm:px-8 md:px-12">
          <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[28px] border border-[#012c3d]/10 bg-white shadow-[0_30px_80px_rgba(1,44,61,0.08)]">
            <div className="bg-[#012c3d] px-6 py-12 sm:px-10 md:px-14 md:py-16">
              <span className="eyebrow mb-4 block !text-[#ffc309] before:!border-[#01c1ff] before:!bg-[#01c1ff]/20">
                Legal
              </span>
              <h1
                className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-noto-serif), serif" }}
              >
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
                Fourwalls Constructions &amp; Interiors is committed to handling
                your information responsibly and transparently.
              </p>
              <div className="mt-6 inline-flex rounded-full border border-[#01c1ff]/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#01c1ff]">
                Effective Date: April 29, 2026
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
              <aside className="border-b border-[#012c3d]/10 bg-[#fcf9f4] px-6 py-8 sm:px-10 lg:border-b-0 lg:border-r lg:px-8">
                <div className="sticky top-28">
                  <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#fa693a]">
                    Quick Summary
                  </h2>
                  <ul className="mt-5 space-y-4 text-sm leading-relaxed text-[#2f3e54]">
                    <li className="rounded-2xl border border-[#012c3d]/8 bg-white px-4 py-4">
                      We collect only the information needed to respond to
                      enquiries and deliver services.
                    </li>
                    <li className="rounded-2xl border border-[#012c3d]/8 bg-white px-4 py-4">
                      We do not sell your personal information to third parties.
                    </li>
                    <li className="rounded-2xl border border-[#012c3d]/8 bg-white px-4 py-4">
                      You can contact us to update or remove your shared details.
                    </li>
                  </ul>

                  <div className="mt-8 rounded-2xl bg-[#012c3d] p-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#01c1ff]">
                      Contact
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/78">
                      Questions about this policy can be directed to our team at
                      the Mambakkam office or by phone.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#ffc309]">
                      +91 99940 95771
                    </p>
                  </div>
                </div>
              </aside>

              <div className="px-6 py-8 sm:px-10 md:px-14 md:py-12">
                <div className="space-y-8">
                  {policySections.map((section) => (
                    <section
                      key={section.title}
                      className="rounded-2xl border border-[#012c3d]/8 bg-[#fcfdfd] p-5 sm:p-6"
                    >
                      <h2
                        className="text-2xl font-bold text-[#012c3d]"
                        style={{ fontFamily: "var(--font-noto-serif), serif" }}
                      >
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-4 text-sm leading-7 text-[#2f3e54] sm:text-base">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#01c1ff]/20 bg-[#01c1ff]/5 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#fa693a]">
                      Need Clarification?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#2f3e54]">
                      Reach out if you would like more information about how
                      enquiries and consultation data are handled.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#012c3d] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#01c1ff] transition-colors hover:bg-[#02364b]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
