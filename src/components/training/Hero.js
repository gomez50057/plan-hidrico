"use client";

import styles from "@/styles/training/Hero.module.css";
const imgBasePath = "/img/training/";


export default function Hero() {
  return (
    <section>
      <div className={styles.contentHeader}>
        <div className={styles.headerTxt}>
          <div className={styles.headerImg02}>
            <img src={`${imgBasePath}hero 02.png`} alt="portada de Ecos del territorio hídrico" className={styles.floatingImg} />
          </div>
          <div className={styles.headerImg03}>
            <img src={`${imgBasePath}hero 03.png`} alt="portada de Ecos del territorio hídrico" className={styles.floatingImg} />
            <div className={styles.overlayContainer}>
            </div>
          </div>
        </div>
        <div className={styles.headerImg01}>
          <img src={`${imgBasePath}hero 01.png`} alt="portada de Ecos del territorio hídrico" className={styles.floatingImg} />
        </div>
      </div>
    </section>
  );
}
