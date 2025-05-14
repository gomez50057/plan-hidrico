"use client";

import Image from "next/image";
import styles from "./ModuleCard.module.css";

export default function ModuleCard({
  overlayTitle,      // texto que aparece sobre la imagen principal
  mainImage,         // ruta de la imagen grande
  thumbImages = [],  // array de dos rutas para las miniaturas
  statsTitle,        // título del recuadro de descripción
  statsText,         // texto largo del recuadro
  quoteImage,        // ruta para el avatar (opcional)
  quoteText,         // texto de cita (opcional)
  quoteAuthor,       // autor de la cita (opcional)
}) {
  return (
    <div className={styles.card}>
      {/* IZQUIERDA: Imagen principal con overlay */}
      <div className={styles.left}>
        <div className={styles.overlay}>
          <h2 className={styles.overlayTitle}>{overlayTitle}</h2>
        </div>
        <Image
          src={mainImage}
          alt={overlayTitle}
          fill
          className={styles.mainImage}
        />
      </div>

      {/* DERECHA: Contenido secundario */}
      <div className={styles.right}>
        {/* Thumbnails + número */}
        <div className={styles.thumbsRow}>
          <div className={styles.counter}>
            {overlayTitle.split(":")[0]}{/* p.ej. "Módulo 1" */}
          </div>
          <div className={styles.thumbs}>
            {thumbImages.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`thumb ${i + 1}`}
                width={120}
                height={70}
                className={styles.thumb}
              />
            ))}
          </div>
        </div>

        {/* Estadística / Descripción larga */}
        <div className={styles.stats}>
          <h3>{statsTitle}</h3>
          <p>{statsText}</p>
          <span className={styles.statsArrow}>↗</span>
        </div>

        {/* Testimonio / Cita (opcional) */}
        {quoteText && (
          <div className={styles.quoteCard}>
            <div className={styles.avatarWrapper}>
              <Image
                src={quoteImage}
                alt={quoteAuthor}
                width={80}
                height={80}
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.quoteBox}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              <p className={styles.quoteBody}>{quoteText}</p>
              <p className={styles.quoteAuthor}>{quoteAuthor}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
