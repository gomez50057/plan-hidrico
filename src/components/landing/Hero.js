"use client";

import styles from "../../styles/Hero.module.css";
const imgBasePath = "/img/";

export default function Hero() {
  return (
    <section id="header">
      <div className={styles.contentHeader}>
        <div className={`${styles.headerTxt} ${styles.fadeInTarget}`}>
          <img src={`${imgBasePath}headertxt.png`} alt="img_representativa" />
        </div>
        <div className={`${styles.headerImg}`}>
          <img src={`${imgBasePath}headerimg.png`} alt="img_representativa" className={styles.floatingImg} />
        </div>
        <div className={`${styles.headerKey}`}>
          <img src={`${imgBasePath}llave.png`} alt="img_representativa" className={styles.floatingImg} />
        </div>
      </div>
      {/* <div className={styles.maskOverlay} /> */}
    </section>
  );
}
