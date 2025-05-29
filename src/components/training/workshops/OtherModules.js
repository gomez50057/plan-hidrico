'use client';

import Link from 'next/link';
import styles from './OtherModules.module.css';

export default function OtherModules({ taller, moduloActualSlug, tallerSlug }) {
  const otherModules = taller.modulos.filter(mod => mod.slug !== moduloActualSlug);

  if (otherModules.length === 0) return null;

  return (
    <div className={styles.otherModules}>
      <h3>Módulos de este taller</h3>
      <ul className={styles.list}>
        {otherModules.map((modulo) => (
          <li key={modulo.slug} className={styles.item}>
            <Link href={`/capacitacion/talleres/${tallerSlug}/${modulo.slug}`}>
              <div className={styles.moduleCard}>
                <img src={modulo.mainImage} alt={modulo.titulo} className={styles.image} />
                <div>
                  <strong>{modulo.titulo}</strong>
                  <p>{modulo.statsTitle}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
