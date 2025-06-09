'use client';
import React, { useState } from 'react';
import HeroSection from '@/components/training/Hero';
import TalleresList from '@/components/training/workshops/TalleresList';
import LinksButton from '@/components/training/LinksButton';
import { trainingContent } from '@/utils/training';
import styles from "@/styles/training/Hero.module.css";


export default function TrainingPage() {
  const [showTalleres, setShowTalleres] = useState(false);

  const handleShowTalleres = () => {
    setShowTalleres(true);
    setTimeout(() => {
      const section = document.getElementById('talleres-section');
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  };

  const handleSelectTaller = (taller) => {
    // Usa router.push para navegar, si es necesario
    window.location.href = `/capacitacion/talleres/${taller.slug}`;
  };

  const talleres = Object.entries(trainingContent).map(([slug, data]) => ({
    slug,
    titulo: data.titulo,
    imagen: data.imagen,
  }));

  return (
    <main>
      <HeroSection />
      <LinksButton onShowTalleres={handleShowTalleres} />

      {showTalleres && (
        <section id="talleres-section" style={{ padding: '2rem 0' }}>
          <TalleresList talleres={talleres} onSelect={handleSelectTaller} />
        </section>
      )}
    </main>
  );
}


