import { use } from 'react';
import { notFound } from 'next/navigation';
import { trainingContent } from '@/utils/training';
import ModuleCard from '@/components/training/ModuleCard';

export default function TallerPage({ params }) {
  const { tallerSlug } = use(params);

  const taller = trainingContent[tallerSlug];
  if (!taller) return notFound();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{taller.titulo}</h1>
      <p>{taller.descripcion}</p>

      {taller.modulos.map((modulo) => (
        <ModuleCard
          key={modulo.slug}
          {...modulo}
          tallerSlug={tallerSlug}
        />
      ))}
    </div>
  );
}
