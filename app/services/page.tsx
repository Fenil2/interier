import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesBentoGrid from "@/components/services/ServicesBentoGrid";
import RenovationSection from "@/components/services/RenovationSection";
import MaterialitySection from "@/components/services/MaterialitySection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export const metadata = {
  title: "AURELIAN | Services - Fourwalls Interiors & Constructions",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <ServicesHero />
        <ServicesBentoGrid />
        <RenovationSection />
        <MaterialitySection />
        <ServicesCTASection />
      </main>
      <Footer />
    </>
  );
}
