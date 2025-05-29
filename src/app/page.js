import HeroSection from "@/components/landing/Hero";
import AboutSection from "@/components/landing/About";
import JustificationSection from "@/components/landing/about/About";
// import MapSection from "@/components/landing/maps/ProjectMap";
import MapSection from "@/components/landing/MapSection";
import InfoSwiper from "@/components/landing/InfoSwiper";
import PublicKnowledgeSection from "@/components/landing/PublicKnowledgeSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <JustificationSection />
      <InfoSwiper />
      <PublicKnowledgeSection />
      <MapSection />
    </main>
  );
}