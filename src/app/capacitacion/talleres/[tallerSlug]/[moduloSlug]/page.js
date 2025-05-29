'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { trainingContent } from '@/utils/training';

export default function ModuloPage({ params }) {
  const { tallerSlug, moduloSlug } = use(params);

  const taller = trainingContent[tallerSlug];
  if (!taller) return notFound();

  const modulo = taller.modulos.find((mod) => mod.slug === moduloSlug);
  if (!modulo) return notFound();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{modulo.titulo}</h1>
      <p>{modulo.statsText}</p>

      {/* Aquí puedes agregar más detalles visuales: imágenes, estadísticas, citas, etc. */}
      {modulo.mainImage && (
        <img src={modulo.mainImage} alt={modulo.titulo} style={{ maxWidth: '100%', marginTop: '1rem' }} />
      )}
    </div>
  );
}
