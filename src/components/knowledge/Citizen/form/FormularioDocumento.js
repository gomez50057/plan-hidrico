import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Select from 'react-select';
import { useState } from 'react';

import styles from './FormularioDocumento.module.css';

const categoriasDisponibles = [
  { value: 1, label: 'Agua' },
  { value: 2, label: 'Gestión' },
  { value: 3, label: 'Agricultura' },
  { value: 4, label: 'Riego' },
  { value: 5, label: 'Tecnología' },
  { value: 6, label: 'Nivelación' },
  { value: 7, label: 'Suelos' },
  { value: 8, label: 'Conservación' },
  { value: 9, label: 'Subterránea' },
  { value: 10, label: 'Sostenibilidad' },
  { value: 11, label: 'Diseño' },
  { value: 12, label: 'Fertilización' },
];

const FormularioDocumento = () => {
  const [mensaje, setMensaje] = useState('');

  const validationSchema = Yup.object({
    nombre_documento: Yup.string().required('Requerido'),
    descripcion: Yup.string().required('Requerido'),
    autor: Yup.string().required('Requerido'),
    categorias: Yup.array().min(1, 'Seleccione al menos una categoría'),
    archivo_pdf: Yup.mixed()
      .required('Requerido')
      .test('fileType', 'Solo se acepta PDF', value => value && value.type === 'application/pdf'),
  });

  return (
    <Formik
      initialValues={{
        nombre_documento: '',
        descripcion: '',
        autor: '',
        categorias: [],
        archivo_pdf: null,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const formData = new FormData();
          formData.append('nombre_documento', values.nombre_documento);
          formData.append('descripcion', values.descripcion);
          formData.append('autor', values.autor);
          values.categorias.forEach(cat => {
            formData.append('categoria_ids', cat.value);
          });
          formData.append('archivo_pdf', values.archivo_pdf);

          await axios.post('/api/documentos/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          setMensaje('Documento enviado con éxito');
          resetForm();
        } catch (error) {
          console.error(error);
          setMensaje('Error al enviar el documento');
        }
      }}
    >
      {({ setFieldValue, values }) => (
        <Form encType="multipart/form-data">
          <h2>Subir Documento</h2>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Nombre del documento</label>
              <Field name="nombre_documento" type="text" className={styles.inputField} />
              <ErrorMessage name="nombre_documento" component="div" className={styles.error} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Descripción</label>
              <Field name="descripcion" as="textarea" className={styles.inputField} />
              <ErrorMessage name="descripcion" component="div" className={styles.error} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Autor</label>
              <Field name="autor" type="text" className={styles.inputField} />
              <ErrorMessage name="autor" component="div" className={styles.error} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Categorías</label>
              <Select
                name="categorias"
                options={categoriasDisponibles}
                isMulti
                value={values.categorias}
                onChange={selected => setFieldValue('categorias', selected)}
              />
              <ErrorMessage name="categorias" component="div" className={styles.error} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Archivo PDF</label>
              <input
                type="file"
                name="archivo_pdf"
                accept="application/pdf"
                onChange={event => setFieldValue('archivo_pdf', event.currentTarget.files[0])}
              />
              <ErrorMessage name="archivo_pdf" component="div" className={styles.error} />
            </div>
          </div>


          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              Enviar Formulario
            </button>
          </div>


          {mensaje && <p>{mensaje}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default FormularioDocumento;
