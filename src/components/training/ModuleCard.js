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
              src="/img/thumb1.jpg"
              alt="Mini vista 1"
              width={120}
              height={70}
              className={styles.thumb}
            />
            <Image
              src="/img/thumb2.jpg"
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
          <div className={styles.avatar}>
            <Image
              src="/img/avatar.jpg"
              alt="Peter Hoff"
              width={80}
              height={80}
              className={styles.avatarImg}
            />
          </div>
          <div className={styles.quoteText}>
            <blockquote>
              “We are willing to build a future that sustains both the needs of
              the present and the health of generations to come”
            </blockquote>
            <cite>Peter Hoff, founder</cite>
          </div>
        </div>
      </div>
    </div>
  );
}
