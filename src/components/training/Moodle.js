'use client';

import React, { useEffect, useState } from 'react';
import styles from './Moodle.module.css';
import TalleresList from './workshops/TalleresList';

const Moodle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTalleres, setShowTalleres] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRedirect = () => {
    window.open('https://moodle.org/?lang=es', '_blank');
  };

  const handleToggleTalleres = () => {
    setShowTalleres((prev) => !prev);
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
          <source src="/img/Moodle.mp4" type="video/mp4" />
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
      {showTalleres && <TalleresList talleres={talleres} />}
    </>
  );
};

export default Moodle;
