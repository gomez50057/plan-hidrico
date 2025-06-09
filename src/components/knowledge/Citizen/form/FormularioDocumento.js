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
    descripcion: Yup.string()
      .required('Requerido')
      .max(255, 'No debe exceder los 255 caracteres'),
    autor: Yup.string().required('Requerido'),
    telefono: Yup.string()
      .required('Requerido')
      .matches(/^\d{10}$/, 'Debe ser un número de 10 dígitos'),
    correo: Yup.string()
      .required('Requerido')
      .email('Debe ser un correo válido'),
    categorias: Yup.array().min(1, 'Seleccione al menos una categoría'),
    archivo_pdf: Yup.mixed()
      .required('Requerido')
      .test('fileType', 'Solo se acepta PDF', value => value && value.type === 'application/pdf')
      .test('fileSize', 'El archivo no debe superar los 5 MB', value => value && value.size <= 5 * 1024 * 1024),
  });

  return (
    <Formik
      initialValues={{
        nombre_documento: '',
        descripcion: '',
        categorias: [],
        autor: '',
        telefono: '',
        correo: '',
        archivo_pdf: null,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const formData = new FormData();
          formData.append('nombre_documento', values.nombre_documento);
          formData.append('descripcion', values.descripcion);
          formData.append('autor', values.autor);
          formData.append('telefono', values.telefono);
          formData.append('correo', values.correo);
          values.categorias.forEach(cat => {
            formData.append('categoria_ids', cat.value);
          });
          formData.append('archivo_pdf', values.archivo_pdf);

          await axios.post('/api/ecos-ciudadania/documentos/', formData, {
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
          <div className={styles.titulo}>
            <h1><span>Ecos</span> del <span className="spanDoarado">Territorio Hídrico</span></h1>
            <p>El contenido será registrado tal como se envíe. Por favor, revisa cuidadosamente la redacción y ortografía antes de enviar.</p>
            <p className={styles.inspiracion}>Estás a unos pasos de ser parte de la transformación hídrica de Hidalgo.</p>
          </div>

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
              <label>Categorías</label>
              <p>Elige una o varias categorías según corresponda al contenido de tu documento. Asegúrate de que estén relacionadas de forma directa y precisa con el tema.</p>
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
              <label>Autor</label>
              <p>Este será el nombre que se mostrará públicamente como autor. Si deseas, incluye títulos como Dr., Ing., Mtra., etc.</p>
              <Field name="autor" type="text" className={styles.inputField} />
              <ErrorMessage name="autor" component="div" className={styles.error} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Teléfono</label>
              <Field name="telefono" type="text" className={styles.inputField} />
              <ErrorMessage name="telefono" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label>Correo</label>
              <Field name="correo" type="email" className={styles.inputField} />
              <ErrorMessage name="correo" component="div" className={styles.error} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Archivo PDF</label>
              <p>Solo se permite subir un archivo en formato PDF, con un tamaño máximo de 5 MB.</p>
              <input
                type="file"
                name="archivo_pdf"
                accept="application/pdf"
                onChange={event => setFieldValue('archivo_pdf', event.currentTarget.files[0])}
              />
              <ErrorMessage name="archivo_pdf" component="div" className={styles.error} />
            </div>
          </div>

          {mensaje && (
            <div className={`${styles.mensaje} ${mensaje.includes('éxito') ? styles.success : styles.errorMessage}`} >
              {mensaje}
            </div>
          )}
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              Enviar Formulario
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioDocumento;
