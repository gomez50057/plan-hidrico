'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/styles/training/LinksButton.module.css';

const LinksButton = ({ onShowTalleres }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRedirect = () => {
    window.open('https://moodle.org/?lang=es', '_blank');
  };

  return (
    <div className={styles.overlayContainer}>
      <div className={`${styles.slider} ${isVisible ? styles.slideIn : ''}`}>
        <div className={styles.leftContent}>
          <button className={styles.button} onClick={onShowTalleres}>
            Conoce nuestros tutoriales
          </button>
        </div>
        <div className={styles.rightContent}>
          <button className={styles.button} onClick={handleRedirect}>
            Conoce nuestros cursos (moodle)
          </button>
        </div>
      </div>
    </div>

  );
};

export default LinksButton;
