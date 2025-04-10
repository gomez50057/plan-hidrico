"use client";

import styles from "../../styles/knowledge/Hero.module.css";
const imgBasePath = "/img/knowledge/";


export default function Hero() {
    return (
    <section>
      <div className={styles.contentHeader}>
        <div className={`${styles.headerImg}`}>
          <img src={`${imgBasePath}headerimg.svg`} alt="portada de Ecos del territorio hídrico" className={styles.floatingImg} />
        </div>
      </div>
    </section>
  );
}
