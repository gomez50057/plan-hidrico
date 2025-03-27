import HeroSection from "@/components/landing/Hero";
import AboutSection from "@/components/landing/About";
import JustificationSection from "@/components/landing/about/About";
import MapSection from "@/components/landing/maps/ProjectMap";
import PublicKnowledgeSection from "@/components/landing/PublicKnowledgeSection";
import TrainingSection from "@/components/landing/TrainingSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <JustificationSection />
      <MapSection />
      <PublicKnowledgeSection />
      <TrainingSection />
    </main>
  );
}
