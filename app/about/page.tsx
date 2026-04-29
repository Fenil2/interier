import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import AboutStatsSection from "@/components/about/AboutStatsSection";
import ProcessSection from "@/components/about/ProcessSection";
import TeamSection from "@/components/about/TeamSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export const metadata = {
  title: "AURELIAN | Design Philosophy - Fourwalls Interiors & Constructions",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <AboutHero />
        <MissionSection />
        <AboutStatsSection />
        <ProcessSection />
        <TeamSection />
        <AboutCTASection />
      </main>
      <Footer />
    </>
  );
}
