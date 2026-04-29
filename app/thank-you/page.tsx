import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You | Fourwalls Constructions & Interiors",
  description:
    "Thank you for contacting Fourwalls Constructions & Interiors. Our team will connect with you soon.",
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f6f3ee] pt-28 pb-16 md:pb-24">
        <section className="px-4 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-[28px] border border-[#012c3d]/10 bg-white shadow-[0_24px_60px_rgba(1,44,61,0.08)]">
              <div className="h-1 bg-gradient-to-r from-[#01c1ff] via-[#18d4cf] to-[#ffc309]" />

              <div className="px-6 py-12 text-center sm:px-10 md:px-14 md:py-16">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#01c1ff]/12">
                  <span className="material-symbols-outlined text-[30px] text-[#01c1ff]">
                    done
                  </span>
                </div>

                <span className="eyebrow mt-6">Thank You</span>

                <h1
                  className="mt-4 text-4xl font-bold tracking-tight text-[#012c3d] md:text-5xl"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  Your enquiry has been received.
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#2f3e54] sm:text-base">
                  Thank you for contacting Fourwalls Constructions &amp;
                  Interiors. Our team will get in touch with you shortly.
                </p>

                <div className="mt-8 rounded-2xl bg-[#fcf9f4] px-5 py-4 text-sm font-medium text-[#012c3d]">
                  Call us: +91 99940 95771
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/"
                    className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#012c3d] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#01c1ff] transition-colors hover:bg-[#02364b]"
                  >
                    Back To Home
                  </Link>
                  {/* <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#012c3d]/12 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#012c3d] transition-colors hover:border-[#01c1ff]/50 hover:text-[#01c1ff]"
                  >
                    Contact Page
                  </Link> */}
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
