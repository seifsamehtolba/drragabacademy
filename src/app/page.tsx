import BiologicalSoupBackground from "@/components/BiologicalSoupBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteVideoSection from "@/components/QuoteVideoSection";
import TopCoursesSection from "@/components/TopCoursesSection";
import HallOfFameSection from "@/components/HallOfFameSection";
import BiologyInsightsSection from "@/components/BiologyInsightsSection";
import ResourcesSection from "@/components/ResourcesSection";
import BiologyMadeFunSection from "@/components/BiologyMadeFunSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#008080] to-[#004d4d]">
      <BiologicalSoupBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <QuoteVideoSection />
        <TopCoursesSection />
        <HallOfFameSection />
        <BiologyInsightsSection />
        <ResourcesSection />
        <BiologyMadeFunSection />
        <Footer />
      </div>
    </main>
  );
}
