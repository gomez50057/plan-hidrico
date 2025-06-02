'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { trainingContent } from '@/utils/training';
import TalleresList from './workshops/TalleresList';
import styles from '@/styles/training/LinksButton.module.css';

const LinksButton = () => {
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
          <div className={styles.leftContent}>
            <button className={styles.button} onClick={handleToggleTalleres}>
              Conoce nuestros tutoriales
            </button>
          </div>
          <div className={styles.rightContent}>
            <button className={styles.button} onClick={handleRedirect}>
              Conoce nuestros cursos (moodle)
            </button>
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

export default LinksButton;
