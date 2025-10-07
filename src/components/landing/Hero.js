"use client";

import styles from "@/styles/Hero.module.css";
const imgBasePath = "/img/";

export default function Hero() {
  return (
    <section id="header" className={styles.header}>
      <div className={styles.contentHeader}>
        {/* Texto/lockup */}
        <div className={`${styles.headerTxt} ${styles.fadeInTarget}`}>
          <img
            src={`${imgBasePath}headertxt.png`}
            alt="Plan Hídrico del Valle del Mezquital"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            draggable="false"
          />
        </div>

        {/* Imagen principal */}
        <div className={styles.headerImg}>
          <img
            src={`${imgBasePath}headerimg.png`}
            alt="Paisaje del Valle del Mezquital"
            className={styles.floatingImg}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>

        {/* Elemento decorativo (llave) */}
        <div className={styles.headerKey} aria-hidden="true">
          <img
            src={`${imgBasePath}llave.png`}
            alt=""
            className={styles.floatingImg}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
