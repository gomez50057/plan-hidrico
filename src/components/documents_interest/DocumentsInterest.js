"use client";

import React from "react";
import styles from "@/styles/documents_interest/DocumentsInterest.module.css";
import { documents } from "@/utils/documentsInterest";

const DocumentsInterest = () => {
  // Divide los documentos en filas de hasta 3 elementos cada una
  const chunkIntoRows = (items, size) => {
    const rows = [];
    for (let i = 0; i < items.length; i += size) {
      rows.push(items.slice(i, i + size));
    }
    return rows;
  };

  const rows = chunkIntoRows(documents, 3);

  return (
    <div className={styles.container}>
      {rows.map((rowItems, rowIndex) => {
        // Solo las filas índice 0 y 1 llevan clase sticky
        const stickyClass =
          rowIndex === 0
            ? styles.stickyFirstRow
            : rowIndex === 1
            ? styles.stickySecondRow
            : "";

        return (
          <div
            key={rowIndex}
            className={`${styles.row} ${stickyClass}`}
          >
            {rowItems.map((doc, cardIndex) => (
              <div key={cardIndex} className={styles.card}>
                {doc.imageUrl ? (
                  <img
                    src={doc.imageUrl}
                    alt={`Miniatura de ${doc.name}`}
                    className={styles.cardImage}
                  />
                ) : (
                  <div className={styles.noThumbnail}>Sin miniatura</div>
                )}
                <h3 className={styles.cardTitle}>{doc.name}</h3>
                <a href={doc.fileUrl} download className={styles.downloadButton}>
                  Ver PDF
                </a>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default DocumentsInterest;
