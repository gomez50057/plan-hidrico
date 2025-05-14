"use client";

import HeroSection from "@/components/training/Hero";
import ModuleCard from "@/components/training/ModuleCard";
import { modules } from "@/utils/training";

export default function TrainingPage() {
  return (
    <main>
      <HeroSection />

      {modules.map((mod) => (
        <ModuleCard key={mod.overlayTitle} {...mod} />
      ))}
    </main>
  );
}
