import HeroSection from "@/components/knowledge/Governmental/Hero";
import ModuleCard from "@/components/training/ModuleCard";

const modules = [
  {
    overlayTitle:
      "Módulo 1: Introducción a la nivelación de tierras y su papel en la gestión del agua",
    mainImage: "/img/aboutImg.jpg",
    thumbImages: ["/img/module1-thumb1.jpg", "/img/module1-thumb2.jpg"],
    statsTitle: "Módulo 1: Introducción a la nivelación de tierras y su papel en la gestión del agua",
    statsText:
      "En este Módulo se revisará la definición de la nivelación de tierras, su importancia, así como el impacto en la eficiencia del riego, ahorro de agua y producción agrícola.",
    // Cita para el Módulo 1
    quoteImage: "/img/avatar.jpg",
    quoteText:
      "We are willing to build a future that sustains both the needs of the present and the health of generations to come",
    quoteAuthor: "Peter Hoff, founder",
  },
  {
    overlayTitle:
      "Módulo 2: Diagnóstico del terreno y tecnologías aplicables",
    mainImage: "/img/module2-main.jpg",
    thumbImages: ["/img/module2-thumb1.jpg", "/img/module2-thumb2.jpg"],
    statsTitle: "Contenido",
    statsText:
      "En este Módulo se tocarán temas como el diagnóstico del terreno, levantamientos topográficos básicos, métodos tradicionales y tecnologías modernas.",
    // sin cita
  },
  {
    overlayTitle: "Módulo 3: Planeación y ejecución de la nivelación",
    mainImage: "/img/module3-main.jpg",
    thumbImages: ["/img/module3-thumb1.jpg", "/img/module3-thumb2.jpg"],
    statsTitle: "Contenido",
    statsText:
      "En este Módulo se estudiarán temas como el tipo de maquinaria necesaria y su manejo básico en la nivelación de tierras.",
    // sin cita
  },
  {
    overlayTitle:
      "Módulo 4: Seguimiento y mantenimiento de terrenos nivelados",
    mainImage: "/img/module4-main.jpg",
    thumbImages: ["/img/module4-thumb1.jpg", "/img/module4-thumb2.jpg"],
    statsTitle: "Contenido",
    statsText:
      "En este Módulo se revisará cómo se da el mantenimiento de terrenos nivelados, así como el uso racional del agua después de la nivelación.",
    // sin cita
  },
];



export default function TrainingPage() {
  return (
    <main>
      <HeroSection />

      {modules.map((mod) => (
        <ModuleCard
          key={mod.overlayTitle}
          {...mod}
        />
      ))}
    </main>
  );
}