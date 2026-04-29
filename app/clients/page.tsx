import Navbar from "@/components/Navbar";
import ClientsHero from "@/components/clients/ClientsHero";
import FeaturedTestimonial from "@/components/clients/FeaturedTestimonial";
import BentoTestimonialsSection from "@/components/clients/BentoTestimonialsSection";
import StatsSection from "@/components/clients/StatsSection";
import ClientsCTASection from "@/components/clients/ClientsCTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AURELIAN | Our Clients - Fourwalls Interiors & Constructions",
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <ClientsHero />
        <FeaturedTestimonial />
        <BentoTestimonialsSection />
        <StatsSection />
        <ClientsCTASection />
      </main>
      <Footer />
    </>
  );
}
