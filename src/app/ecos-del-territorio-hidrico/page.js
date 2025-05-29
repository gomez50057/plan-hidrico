import HeroSection from "@/components/knowledge/Citizen/Hero";
import AboutSection from "@/components/knowledge/Citizen/About";
import CitizenParticipation from "@/components/knowledge/Citizen/CitizenParticipation";
import DocumentCards from "@/components/knowledge/Citizen/DocumentCards";



export default function CitizenPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CitizenParticipation />
      <DocumentCards />
    </main>
  );
}