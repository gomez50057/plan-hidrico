'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { trainingContent } from '@/utils/training';
import styles from './ModuloContent.module.css';

export default function ModuloContent({ params }) {
  const { tallerSlug, moduloSlug } = use(params);

  const taller = trainingContent[tallerSlug];
  if (!taller) return notFound();

  const modulo = taller.modulos.find((mod) => mod.slug === moduloSlug);
  if (!modulo) return notFound();

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumbs}>
        <span className={styles.prefix}>Hídrico</span> &raquo;{' '}
        <span className={styles.taller}>{taller.titulo}</span> &raquo;{' '}
        <strong className={styles.modulo}>{modulo.titulo}</strong>
      </nav>

      <h1 className={styles.title}>{modulo.titulo}</h1>
      <p className={styles.description}>{modulo.statsText}</p>

      {modulo.mainImage && (
        <img
          src={modulo.mainImage}
          alt={modulo.titulo}
          className={styles.mainImage}
        />
      )}

      {modulo.temas && modulo.temas.map((tema, index) => (
        <div key={index} className={styles.temaSection}>
          <h2 className={styles.temaTitulo}>{tema.titulo}</h2>
          <p className={styles.temaContenido}>{tema.contenido}</p>
          {tema.media?.tipo === 'imagen' && (
            <img
              src={tema.media.src}
              alt={tema.titulo}
              className={styles.temaMedia}
            />
          )}
          {tema.media?.tipo === 'video' && (
            <div className={styles.temaVideoWrapper}>
              <iframe
                src={tema.media.src}
                title={tema.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
