import HeroSection from "@/components/knowledge/Governmental/Hero";
import AboutSection from "@/components/knowledge/Governmental/About";
import DocumentCards from "@/components/planes-directores-dr/DocumentsInterest";

export default function GovernmentalPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <DocumentCards />

      <AboutSection />
      <AboutSection />
      <AboutSection />

    </main>
  );
}