'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './ModuleCard.module.css';

export default function ModuleCard({
  titulo,
  slug: moduloSlug,
  tallerSlug,
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
    router.push(`/capacitacion/talleres/${tallerSlug}/${moduloSlug}`);
  };

  return (
    <div className={styles.card}>
      {/* IZQUIERDA: Imagen principal con overlay */}
      <div className={styles.left}>
        <div className={styles.overlay}>
          <h2 className={styles.overlayTitle}>{titulo}</h2>
        </div>
        <Image
          src={mainImage}
          alt={titulo}
          fill
          className={styles.mainImage}
        />
      </div>

      {/* DERECHA: Contenido textual */}
      <div className={styles.right}>
        {/* Títulos y miniaturas */}
        <div className={styles.thumbsRow}>
          <div className={styles.counter}>
            {titulo?.split?.(':')[0] || 'Módulo'}
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

        {/* Descripción */}
        <div
          className={styles.stats}
          onClick={handleStatsClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleStatsClick()}
        >
          <h3>{statsTitle}</h3>
          <p>{statsText}</p>
          <span className={styles.statsArrow}>↗</span>
        </div>

        {/* Cita (opcional) */}
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
