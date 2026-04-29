import Navbar from "@/components/Navbar";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioBentoGrid from "@/components/portfolio/PortfolioBentoGrid";
import PortfolioCTASection from "@/components/portfolio/PortfolioCTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AURELIAN | Portfolio - Fourwalls Interiors & Constructions",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <PortfolioHero />
        <PortfolioBentoGrid />
        <PortfolioCTASection />
      </main>
      <Footer />
    </>
  );
}
