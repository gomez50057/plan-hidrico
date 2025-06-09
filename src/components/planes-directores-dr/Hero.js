"use client";

import styles from "@/styles/knowledge/Hero.module.css";
const imgBasePath = "/img/";

export default function Hero() {
    return (
    <section>
      <div className={styles.contentHeader}>
        <div className={`${styles.headerImg}`}>
          <img src={`${imgBasePath}PlanesDirectores.svg`} alt="Portada de Planes Directores de los Distritos de Riego" className={styles.floatingImg} />
        </div>
      </div>
    </section>
  );
}
