"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/plot/PlotHero.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";
import { dataParcelas } from "@/utils/parcelas";

const PlotHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [manualChange, setManualChange] = useState(false);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [activeIndex]);

  useEffect(() => {
    if (!manualChange) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % dataParcelas.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [manualChange]);

  const handleNext = () => {
    setManualChange(true);
    setActiveIndex((prev) => (prev + 1) % dataParcelas.length);
    restartAutoAdvance();
  };

  const handlePrev = () => {
    setManualChange(true);
    setActiveIndex((prev) => (prev - 1 + dataParcelas.length) % dataParcelas.length);
    restartAutoAdvance();
  };

  const restartAutoAdvance = () => {
    setManualChange(false);
  };

  const getNextIndex = (index, offset) => {
    return (index + offset) % dataParcelas.length;
  };

  const handlePreviewClick = (index) => {
    setManualChange(true);
    setActiveIndex(index);
    restartAutoAdvance();
  };

  const { name, description, bg, modalidad, link } = dataParcelas[activeIndex];

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay}></div>

      {/* Contenido principal: título, descripción y botón */}
      <div className={styles.content}>
        <div
          key={`${animationKey}-name`}
          className={`${styles.name} ${styles.textAnimation} delay-1`}
        >
          {name}
        </div>

        <div
          key={`${animationKey}-description`}
          className={`${styles.description} ${styles.textAnimation} delay-2`}
        >
          {description}
        </div>

        <div
          key={`${animationKey}-method`}
          className={`${styles.method} ${styles.textAnimation} delay-2`}
        >
          {modalidad}
        </div>

        <Link href={`${link}`} target="_blank" rel="noopener noreferrer" >
          <button
            key={`${animationKey}-button`}
            className={`${styles.textAnimation} delay-3`}
          >
            Leer más
          </button>
        </Link>

      </div>

      {/* Vista previa de los siguientes 2 slides */}
      <div className={styles.previewContainer}>
        {Array(2)
          .fill(null)
          .map((_, offset) => {
            const nextIndex = getNextIndex(activeIndex, offset + 1);
            const { bg: nextBg } = dataParcelas[nextIndex];
            return (
              <div
                key={nextIndex}
                className={`${styles.previewItem} ${styles.slideAnimation}`}
                style={{ backgroundImage: `url(${nextBg})` }}
                onClick={() => handlePreviewClick(nextIndex)}
              ></div>
            );
          })}
      </div>

      {/* Botones de navegación manual */}
      <div className={styles.button}>
        <button className={styles.prevButton} onClick={handlePrev}>
          <ArrowBackIos />
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default PlotHero;
