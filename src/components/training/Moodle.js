'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { trainingContent } from '@/utils/training';
import TalleresList from './workshops/TalleresList';
import styles from './Moodle.module.css';

const Moodle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTalleres, setShowTalleres] = useState(false);
  const talleresRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRedirect = () => {
    window.open('https://moodle.org/?lang=es', '_blank');
  };

  const handleToggleTalleres = () => {
    setShowTalleres((prev) => !prev);
    setTimeout(() => {
      if (talleresRef.current) {
        const top = talleresRef.current.getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  };

  const handleSelectTaller = (taller) => {
    router.push(`/capacitacion/talleres/${taller.slug}`);
  };

  const talleres = Object.entries(trainingContent).map(([slug, data]) => ({
    slug,
    titulo: data.titulo,
    imagen: data.imagen,
  }));

  return (
    <>
      <div className={`${styles.slider} ${isVisible ? styles.slideIn : ''}`}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="/video/training/campo.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <button className={styles.button} onClick={handleToggleTalleres}>
              conoce nuestro sistema de curso de talleres
            </button>
          </div>
          <div className={styles.rightContent}>
            <button className={styles.button} onClick={handleRedirect}>
              conoce nuestro sistema de curso de moodle
            </button>
          </div>
        </div>
      </div>

      {showTalleres && (
        <div ref={talleresRef}>
          <TalleresList talleres={talleres} onSelect={handleSelectTaller} />
        </div>
      )}
    </>
  );
};

export default Moodle;
