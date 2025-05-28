"use client";

import ModuleCard from "@/components/training/ModuleCard";
import { modules, modules02  } from "@/utils/training";

export default function ModuleSection() {
  return (
    <section>
      <h1>
        <span className="spanDoarado">Nivelación de tierras</span> para la{" "}
        <span className="spanVino">eficiencia hídrica:</span> fundamentos e impacto en el riego
      </h1>

      {modules.map((mod) => (
        <ModuleCard key={mod.titulo} {...mod} />
      ))}

      {modules02.map((mod) => (
        <ModuleCard key={mod.titulo} {...mod} />
      ))}
    </section>
  );
}
