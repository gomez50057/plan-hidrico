"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/plot/PlotHero.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import Link from "next/link";
import { dataSuppliers } from "@/utils/suppliers";

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
        setActiveIndex((prev) => (prev + 1) % dataSuppliers.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [manualChange]);

  const handleNext = () => {
    setManualChange(true);
    setActiveIndex((prev) => (prev + 1) % dataSuppliers.length);
    restartAutoAdvance();
  };

  const handlePrev = () => {
    setManualChange(true);
    setActiveIndex((prev) => (prev - 1 + dataSuppliers.length) % dataSuppliers.length);
    restartAutoAdvance();
  };

  const restartAutoAdvance = () => {
    setManualChange(false);
  };

  const getNextIndex = (index, offset) => {
    return (index + offset) % dataSuppliers.length;
  };

  const handlePreviewClick = (index) => {
    setManualChange(true);
    setActiveIndex(index);
    restartAutoAdvance();
  };

  const { Empresa, bg, ServiciosOfrecen, SitioWeb, RedesSociales } = dataSuppliers[activeIndex];

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
          <h2>{Empresa}</h2>
        </div>

        <div
          key={`${animationKey}-description`}
          className={`${styles.description} ${styles.textAnimation} delay-2`}
        >
          <p>Servicios que ofrecen: {ServiciosOfrecen}</p>
        </div>

        <div
          key={`${animationKey}-method`}
          className={`${styles.method} ${styles.textAnimation} delay-2`}
        >
          <p>
            Sitio Web:&nbsp;
            {SitioWeb && SitioWeb.trim() !== "" && SitioWeb.trim().toLowerCase() !== "no cuenta con página web"
              ? SitioWeb
                .replace(/\n/g, ",")            // Saltos de línea por coma
                .replace(/\s+/g, " ")           // Espacios múltiples por uno solo
                .split(",")                     // Separa por coma
                .map(site => site.trim())
                .filter(site => site.length > 0)
                .map((site, idx, arr) => (
                  <span key={site + idx}>
                    <a
                      href={
                        site.startsWith("http")
                          ? site
                          : "https://" + site.replace(/^www\./, "")
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1e88e5", textDecoration: "underline" }}
                    >
                      {site}
                    </a>
                    {idx < arr.length - 1 && ', '}
                  </span>
                ))
              : "No cuenta con página web"}
          </p>
        </div>

        <div
          key={`${animationKey}-numParcelas`}
          className={`${styles.method} ${styles.textAnimation} delay-2`}
        >
          <p>
            Redes Sociales:&nbsp;
            {Array.isArray(RedesSociales) && RedesSociales.length > 0
              ? RedesSociales.map((red, idx) => (
                <span key={idx}>
                  {red.url && red.url.startsWith("http") ? (
                    <a
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1e88e5", textDecoration: "underline" }}
                    >
                      Visítalos en {red.nombre}
                    </a>
                  ) : (
                    // Solo muestra el texto tal cual si no es link
                    `${red.nombre}${red.url && red.url.trim() ? (": " + red.url) : ""}`
                  )}
                  {/* Poner coma excepto en el último */}
                  {idx < RedesSociales.length - 1 && ', '}
                </span>
              ))
              : "No disponible"}
          </p>
        </div>

        {/* <Link href={`${link}`} target="_blank" rel="noopener noreferrer" >
          <button
            key={`${animationKey}-button`}
            className={`${styles.textAnimation} delay-3`}
          >
            Leer más
          </button>
        </Link> */}

      </div>

      {/* Vista previa de los siguientes 2 slides */}
      <div className={styles.previewContainer}>
        {Array(2)
          .fill(null)
          .map((_, offset) => {
            const nextIndex = getNextIndex(activeIndex, offset + 1);
            const { bg: nextBg } = dataSuppliers[nextIndex];
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
