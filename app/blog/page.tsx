import Navbar from "@/components/Navbar";
import JournalHero from "@/components/journal/JournalHero";
import FeaturedEditorial from "@/components/journal/FeaturedEditorial";
import BentoInsightsSection from "@/components/journal/BentoInsightsSection";
import NewsletterSection from "@/components/journal/NewsletterSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AURELIAN | Blog - Fourwalls Interiors & Constructions",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <JournalHero />
        <FeaturedEditorial />
        <BentoInsightsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
