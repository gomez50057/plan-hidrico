'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { normalizeName } from '@/utils/utils';
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
  }, 300); // esperar un poco más para una transición suave
};

  const handleSelectTaller = (taller) => {
    const slug = normalizeName(taller.titulo);
    router.push(`/capacitacion/talleres/${slug}`);
  };

  const talleres = [
    {
      titulo: 'Nivelación de tierras para la eficiencia hídrica',
      imagen: '/img/training/recursos/1.jpg'
    },
    {
      titulo: 'Tecnologías de riego por goteo',
      imagen: '/img/training/recursos/6.jpg'
    },
    {
      titulo: 'Manejo y conservación del agua',
      imagen: '/img/training/recursos/5.jpg'
    },
    {
      titulo: 'Optimización de canales y drenajes agrícolas',
      imagen: '/img/training/recursos/2.jpg'
    }
  ];

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
