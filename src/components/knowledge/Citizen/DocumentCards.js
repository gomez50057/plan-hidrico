"use client";
import React, { useState, useMemo, useEffect } from 'react';
import styles from './DocumentCards.module.css';
import dynamic from 'next/dynamic';
const ReactSelect = dynamic(() => import('react-select'), { ssr: false });

export default function DocumentCards() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState([]);
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [documentos, setDocumentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch desde la API al montar el componente
  useEffect(() => {
    async function fetchDocumentos() {
      try {
        setLoading(true);
        const res = await fetch('/api/ecos-ciudadania/documentos/');
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        setDocumentos(data);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los documentos.');
      } finally {
        setLoading(false);
      }
    }
    fetchDocumentos();
  }, []);

  const documentosFiltrados = useMemo(() => {
    return documentos.filter(doc => {
      const coincideBusqueda = doc.nombre_documento
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      const coincideCategoria = categoriaFiltro.length
        ? categoriaFiltro.some(cat => doc.categorias.includes(cat))
        : true;
      const coincideFecha = fechaFiltro
        ? doc.fecha_carga === fechaFiltro
        : true;
      return coincideBusqueda && coincideCategoria && coincideFecha;
    });
  }, [busqueda, categoriaFiltro, fechaFiltro, documentos]);

  const categoriasUnicas = [...new Set(documentos.flatMap(doc => doc.categorias))];
  const options = categoriasUnicas.map(cat => ({ value: cat, label: cat }));

  if (loading) {
    return <p>Cargando documentos...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.filtros}>
        <input
          type="text"
          placeholder="Buscar por nombre del documento"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />

        <ReactSelect
          isMulti
          placeholder="Filtrar por categorías"
          options={options}
          value={options.filter(opt =>
            categoriaFiltro.includes(opt.value)
          )}
          onChange={selected =>
            setCategoriaFiltro(
              selected ? selected.map(s => s.value) : []
            )
          }
        />

        <input
          type="date"
          value={fechaFiltro}
          onChange={e => setFechaFiltro(e.target.value)}
        />
      </div>

      <div className={styles.grid}>
        {documentosFiltrados.map((doc, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{doc.nombre_documento}</h3>
              <p>{doc.descripcion}</p>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.footerInfo}>
                <div className={styles.authorLine}>
                  <hr />
                  <strong>{doc.autor}</strong>
                </div>

                <div className={styles.cardMetaRow}>
                  <div>
                    <p>{doc.categorias.join(', ')}</p>
                    <p>
                      <small>Fecha: {doc.fecha_carga}</small>
                    </p>
                  </div>
                  <div className={styles.footerLinkBox}>
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver documento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
