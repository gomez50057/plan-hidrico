"use client";

import HeroSection from "@/components/training/Hero";
import ModuleCard from "@/components/training/ModuleCard";
import { modules } from "@/utils/training";
import Moodle from "@/components/training/Moodle";

export default function TrainingPage() {
  return (
    <main>
      <HeroSection />
      <Moodle />

      <h1> <span className="spanDoarado">Nivelación de tierras</span>  para la <span className="spanVino">eficiencia hídrica:</span>  fundamentos e impacto en el riego</h1>

      {modules.map((mod) => (
        <ModuleCard key={mod.overlayTitle} {...mod} />
      ))}
    </main>
  );
}
