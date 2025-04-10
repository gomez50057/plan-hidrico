'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  createMRTColumnHelper,
} from 'material-react-table';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  Button,
  Box,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import axios from 'axios';
import ProjectModal from '../ProjectModal';
import '../CRUDTable.css';

const CRUDTable = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [modalMode, setModalMode] = useState('edit');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchData = useCallback(async () => {
    try {
      // const response = await axios.get(`${apiUrl}/api/formularios/`);
      const response = await axios.get(`http://localhost:8000/api/formularios`);

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAction = (mode, projectId) => {
    setSelectedProjectId(projectId);
    setModalMode(mode);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProjectId(null);
    fetchData();
  };

  const columnHelper = createMRTColumnHelper();

  const columns = [
    columnHelper.accessor('folio', {
      header: 'Folio',
    }),
    columnHelper.accessor('fecha', {
      header: 'Fecha',
    }),
    columnHelper.accessor('nombre', {
      header: 'Nombre',
    }),
    columnHelper.accessor('municipio', {
      header: 'Municipio',
    }),
    columnHelper.accessor('distrito_riego', {
      header: 'Distrito Riego',
    }),
    columnHelper.accessor('modulo_riego', {
      header: 'Modulo Riego',
    }),  
    {
      id: 'acciones',
      header: 'Acciones',
      enableSorting: false,
      enableColumnPinning: true,
      Cell: ({ row }) => {
        const id = row.original.id;
        return (
          <Box display="flex" gap={1} className="Acciones-con">
            <Button variant="outlined" className="crud-button" onClick={() => handleAction('edit', id)}>Editar</Button>
            <Button variant="outlined" className="crud-button" onClick={() => handleAction('update', id)}>Actualizar</Button>
            <Button variant="outlined" className="crud-button" onClick={() => handleAction('history', id)}>Historial</Button>
          </Box>
        );
      },
      enableSorting: false,
    },
  ];

  // CSV Export config
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
    filename: 'acuerdos_export',
  });


  const estatusMap = {
    sin_avance: 'Sin Avance',
    en_proceso: 'En Proceso',
    atendido: 'Atendido',
    cancelado: 'Cancelado',
  };

  const sanitizeForCsv = (obj) => {
    const clean = {};
    for (const key in obj) {
      let value = obj[key];

      // Personalizaciones
      if (key === 'estatus') {
        value = estatusMap[value] || value;
      }

      if (key === 'descripcion_avance') {
        value = 'Ver todos los avances';
      }

      if (key === 'documentos') {
        if (Array.isArray(value)) {
          value = value.map((doc) =>
            typeof doc === 'string' ? doc : doc?.nombre || '[Documento]'
          ).join(', ');
        } else if (typeof value === 'object') {
          value = JSON.stringify(value);
        }
      }

      // Sanitización general
      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        value === null ||
        value === undefined
      ) {
        clean[key] = value;
      } else {
        clean[key] = JSON.stringify(value);
      }
    }
    return clean;
  };

  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => sanitizeForCsv(row.original));
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportAllData = () => {
    const cleanData = data.map(sanitizeForCsv);
    const csv = generateCsv(csvConfig)(cleanData);
    download(csvConfig)(csv);
  };


  const table = useMaterialReactTable({
    data,
    columns,
    enableRowSelection: true,
    enableColumnActions: false,
    enableColumnPinning: true,
    enableDensityToggle: false,
    enableColumnFilters: true,
    renderTopToolbarCustomActions: ({ table }) => (
      <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '8px' }}>
        <Button
          onClick={handleExportAllData}
          startIcon={<FileDownloadIcon />}
        >
          Exportar todos los datos
        </Button>
        <Button
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
          startIcon={<FileDownloadIcon />}
        >
          Exportar seleccionados
        </Button>
      </Box>
    ),
    initialState: {
      columnVisibility: { id: false },
      columnPinning: { right: ['acciones'], },
    },
    muiTableBodyRowProps: {
      sx: {
        '&:hover': {
          backgroundColor: 'rgba(230, 230, 230, 0.9)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
      },
    },
    localization: {
      actions: 'Acciones',
      noRecordsToDisplay: 'No se encontraron registros',
      showHideColumns: 'Ver columnas',
      search: 'Buscar',
      clearSearch: 'Limpiar',
      filter: 'Filtrar',
      sortBy: 'Ordenar por',
    },
  });

  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '40px',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h3: {
            fontWeight: 600,
            fontSize: '2.25rem',
            color: '#DEC9A3',
            fontFamily: 'Montserrat',
            padding: '10px',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="table_grid">
        <Typography variant="h3">Registrados</Typography>
        <MaterialReactTable table={table} />
      </div>

      <ProjectModal
        open={openModal}
        handleClose={handleCloseModal}
        projectId={selectedProjectId}
        mode={modalMode}
      />
    </ThemeProvider>
  );
};

export default CRUDTable;
