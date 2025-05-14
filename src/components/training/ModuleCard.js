"use client";

import Image from "next/image";
import styles from "./ModuleCard.module.css";

export default function ModuleCard() {
  return (
    <div className={styles.card}>
      {/* IZQUIERDA: Imagen principal con overlay */}
      <div className={styles.left}>
        <div className={styles.overlay}>
          <h2 className={styles.overlayTitle}>Explore our solutions</h2>
        </div>
        <Image
          src="/img/aboutImg.jpg"
          alt="Interior con vegetación"
          fill
          className={styles.mainImage}
        />
      </div>

      {/* DERECHA: Contenido secundario */}
      <div className={styles.right}>
        {/* Thumbnails + número */}
        <div className={styles.thumbsRow}>
          <div className={styles.counter}>01</div>
          <div className={styles.thumbs}>
            <Image
              src="/img/aboutImg.jpg"
              alt="Mini vista 1"
              width={120}
              height={70}
              className={styles.thumb}
            />
            <Image
              src="/img/aboutImg.jpg"
              alt="Mini vista 2"
              width={120}
              height={70}
              className={styles.thumb}
            />
          </div>
        </div>

        {/* Estadística */}
        <div className={styles.stats}>
          <h3>90% Water Savings</h3>
          <p>
            The smart irrigation systems implemented by UrbanGreen Tech have
            proven to reduce water consumption by up to 90% when compared to
            conventional farming practices.
          </p>
          <span className={styles.statsArrow}>↗</span>
        </div>

        {/* Testimonio */}
        <div className={styles.quoteCard}>
          {/* CÍRCULO (avatar) */}
          <div className={styles.avatarWrapper}>
            <Image
              src="/img/avatar.jpg"
              alt="Peter Hoff"
              width={80}
              height={80}
              className={styles.avatarImg}
            />
          </div>

          {/* RECTÁNGULO (texto) */}
          <div className={styles.quoteBox}>
            <span className={styles.quoteIcon}>&ldquo;</span>
            <p className={styles.quoteBody}>
              We are willing to build a future that sustains both the needs of the present
              and the health of generations to come
            </p>
            <p className={styles.quoteAuthor}>Peter Hoff, founder</p>
          </div>
        </div>

      </div>
    </div>
  );
}
