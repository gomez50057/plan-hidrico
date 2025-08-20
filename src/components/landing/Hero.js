"use client";

import styles from "../../styles/Hero.module.css";
const imgBasePath = "/img/";

export default function Hero() {
  return (
    <section id="header">
      <div className={styles.contentHeader}>
        <div className={`${styles.headerTxt} ${styles.fadeInTarget}`}>
          <img src={`${imgBasePath}headertxt.png`} alt="texto Plan Hídrico del Valle del Mezquital" />
        </div>
        <div className={`${styles.headerImg}`}>
          <img src={`${imgBasePath}headerimg.png`} alt="imagen de montañas y parcelas" className={styles.floatingImg} />
        </div>
        <div className={`${styles.headerKey}`}>
          <img src={`${imgBasePath}llave.png`} alt="llave" className={styles.floatingImg} />
        </div>
      </div>
      {/* <div className={styles.maskOverlay} /> */}
    </section>
  );
}
