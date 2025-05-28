'use client';

import React from 'react';
import styles from './TalleresList.module.css';

const TalleresList = ({ talleres, onSelect }) => {
  return (
    <div className={styles.gridContainer}>
      {talleres.map((taller, index) => (
        <div
          className={styles.card}
          key={index}
          onClick={() => onSelect?.(taller)}
        >
          <img
            src={taller.imagen}
            alt={taller.titulo}
            className={styles.image}
          />
          <div className={styles.title}>{taller.titulo}</div>
        </div>
      ))}
    </div>
  );
};

export default TalleresList;
