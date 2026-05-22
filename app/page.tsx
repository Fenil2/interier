import AboutSection from "../components/fourwalls/AboutSection";
import BlogSection from "../components/fourwalls/BlogSection";
import ContactSection from "../components/fourwalls/ContactSection";
import CtaBand from "../components/fourwalls/CtaBand";
import Footer from "../components/fourwalls/Footer";
import HeroSection from "../components/fourwalls/HeroSection";
import InstagramSection from "../components/fourwalls/InstagramSection";
import Navbar from "../components/fourwalls/Navbar";
import ProjectsSection from "../components/fourwalls/ProjectsSection";
import ServicesSection from "../components/fourwalls/ServicesSection";
import TestimonialsSection from "../components/fourwalls/TestimonialsSection";
import WhySection from "../components/fourwalls/WhySection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <ProjectsSection />
        <TestimonialsSection />
        <InstagramSection />
        <CtaBand />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
