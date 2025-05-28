'use client';

import React, { useEffect, useState } from 'react';
import styles from './Moodle.module.css';

const Moodle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRedirect = () => {
    window.open('https://moodle.org/?lang=es', '_blank');
  };

  return (
    <div className={`${styles.slider} ${isVisible ? styles.slideIn : ''}`}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="/img/Moodle.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <button className={styles.button} onClick={handleRedirect}>
          conoce nuestros sistema de curso de moodle
        </button>
      </div>
    </div>
  );
};

export default Moodle;
