import Navbar from "@/components/Navbar";
import DifferenceHero from "@/components/difference/DifferenceHero";
import BentoEdgeSection from "@/components/difference/BentoEdgeSection";
import TimelineSection from "@/components/difference/TimelineSection";
import DifferenceCTASection from "@/components/difference/DifferenceCTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AURELIAN | What Makes Us Different - Fourwalls Interiors & Constructions",
};

export default function DifferencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <DifferenceHero />
        <BentoEdgeSection />
        <TimelineSection />
        <DifferenceCTASection />
      </main>
      <Footer />
    </>
  );
}
