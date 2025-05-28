'use client';

import React, { useEffect, useState } from 'react';
import styles from './Tutorial.module.css';

const Tutorial = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRedirect = () => {
    window.open('https://Tutorial.org/?lang=es', '_blank');
  };

  return (
    <div className={`${styles.slider} ${isVisible ? styles.slideIn : ''}`}>
            <img src="/img/training/tutorial/Tutorial.png" alt="Tutorial" className={styles.imageBackground} />

      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <button className={styles.button} onClick={handleRedirect}>
          conoce nuestros sistema de curso de Tutorial
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
