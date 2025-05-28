'use client';

import { notFound } from 'next/navigation';
import { trainingContent } from '@/utils/training';

export default function ModuloPage({ params }) {
  const taller = trainingContent[params.slug];
  const modulo = taller?.modulos.find((m) => m.slug === params.modulo);

  if (!modulo) return notFound();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{modulo.titulo}</h1>
      <img
        src={modulo.mainImage}
        alt={modulo.titulo}
        style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
      />
      <p>{modulo.statsText}</p>

      {modulo.quoteText && (
        <blockquote style={{ marginTop: '1rem' }}>
          <p>"{modulo.quoteText}"</p>
          <footer>- {modulo.quoteAuthor}</footer>
        </blockquote>
      )}
    </div>
  );
}
