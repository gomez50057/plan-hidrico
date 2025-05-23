'use client';

import React, { useEffect, useState } from 'react';
import styles from './GoogleFormEmbed.module.css';
import FormularioDocumento from './form/FormularioDocumento';

const GoogleFormEmbed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className={`${styles.slider} ${isVisible ? styles.slideIn : ''}`}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="/img/GoogleFormEmbed.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <button className={styles.button} onClick={() => setShowModal(true)}>
            Participa con tu propuesta
          </button>
        </div>
      </div>

      {/* 🔥 Modal se renderiza FUERA del contenedor slider */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.close} onClick={() => setShowModal(false)}>
              &times;
            </button>
            <FormularioDocumento />
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleFormEmbed;
