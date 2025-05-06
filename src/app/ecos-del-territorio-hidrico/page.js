import HeroSection from "@/components/knowledge/Citizen/Hero";
import AboutSection from "@/components/knowledge/Citizen/About";
import DocumentCards from "@/components/knowledge/Citizen/DocumentCards";


export default function CitizenPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <DocumentCards />
    </main>
  );
}