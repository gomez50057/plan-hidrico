import HeroSection from "@/components/landing/Hero";
import AboutSection from "@/components/landing/About";
import JustificationSection from "@/components/landing/Justification";
// import MapSection from "@/components/landing/maps/ProjectMap";
import MapSection from "@/components/landing/MapSection";
import InfoSwiper from "@/components/landing/InfoSwiper";
import PublicKnowledgeSection from "@/components/landing/PublicKnowledgeSection";
// import LogoCarousel from "@/components/landing/LogoCarousel";
import CarouselSlider from "@/components/landing/CarouselSlider";



export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <JustificationSection />
      <InfoSwiper />
      <CarouselSlider />
      <PublicKnowledgeSection />
      <MapSection />
    </main>
  );
}