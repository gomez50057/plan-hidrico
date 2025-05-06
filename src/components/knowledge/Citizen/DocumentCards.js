"use client";
import React, { useState, useMemo } from 'react';
import styles from './DocumentCards.module.css';
import dynamic from 'next/dynamic';
const ReactSelect = dynamic(() => import('react-select'), { ssr: false });
import { documentos } from '@/utils/Citizen';

export default function DocumentCards() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState([]);

  const [fechaFiltro, setFechaFiltro] = useState('');

  const documentosFiltrados = useMemo(() => {
    return documentos.filter(doc => {
      const coincideBusqueda = doc.nombre_documento.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCategoria = categoriaFiltro.length
        ? categoriaFiltro.some(cat => doc.categorias.includes(cat))
        : true;

      // const coincideCategoria = categoriaFiltro ? doc.categorias.includes(categoriaFiltro) : true;
      const coincideFecha = fechaFiltro ? doc.fecha_carga === fechaFiltro : true;
      return coincideBusqueda && coincideCategoria && coincideFecha;
    });
  }, [busqueda, categoriaFiltro, fechaFiltro]);

  const categoriasUnicas = [...new Set(documentos.flatMap(doc => doc.categorias))];
  const options = categoriasUnicas.map(cat => ({ value: cat, label: cat }));


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
          value={options.filter(opt => categoriaFiltro.includes(opt.value))}
          onChange={(selected) => setCategoriaFiltro(selected.map(s => s.value))}
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
            <h3>{doc.nombre_documento}</h3>
            <p>{doc.descripcion}</p>
            <p><strong>Autor:</strong> {doc.autor}</p>
            <p><strong>Fecha:</strong> {doc.fecha_carga}</p>
            <p><strong>Categorías:</strong> {doc.categorias.join(', ')}</p>
            <a href={doc.link} target="_blank">Ver documento</a>
          </div>
        ))}
      </div>
    </div>
  );
} 
