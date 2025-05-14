"use client";

import styles from "@/styles/training/Hero.module.css";
const imgBasePath = "/img/training/";


export default function Hero() {
    return (
    <section>
      <div className={styles.contentHeader}>
        <div className={`${styles.headerImg}`}>
          <img src={`${imgBasePath}hero.png`} alt="portada de Ecos del territorio hídrico" className={styles.floatingImg} />
        </div>
      </div>
    </section>
  );
}
