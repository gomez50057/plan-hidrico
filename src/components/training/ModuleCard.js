"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ModuleCard.module.css";
import { normalizeName } from "@/utils/normalize";

export default function ModuleCard({
  overlayTitle,
  mainImage,
  thumbImages = [],
  statsTitle,
  statsText,
  quoteImage,
  quoteText,
  quoteAuthor,
}) {
  const router = useRouter();

  const handleStatsClick = () => {
    const slug = normalizeName (statsTitle);
    router.push(`/modules/${slug}`);
  };

  return (
    <div className={styles.card}>
      {/* … IZQUIERDA … */}
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

      {/* DERECHA: contenido */}
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
        <div
          className={styles.stats}
          onClick={handleStatsClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleStatsClick()}
        >
          <h3>{statsTitle}</h3>
          <p>{statsText}</p>
          <span className={styles.statsArrow}>↗</span>
        </div>

        {/* … cita opcional … */}
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
