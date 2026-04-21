import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MapSection from "@/components/contact/MapSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AURELIAN | Connect with Excellence - Fourwalls Interiors & Constructions",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <ContactHero />
        <ContactFormSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
