import styles from "../../../styles/knowledge/About.module.css";
const imgBasePath = "/img/knowledge/";

export default function About() {
  return (
    <section>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <img src={`${imgBasePath}headerimg.png`} alt="imagen representativa de que es el plan hídrico metropolitano" className={styles.floatingImg} />
        </div>
        <div className={styles.aboutTxt}>
          <h2><span className="spanDoarado">Planeación</span> para el <span>Futuro del Agua</span></h2>
          <p>Planeación para el Futuro del Agua es el espacio donde convergen las estrategias, políticas públicas y acciones para garantizar una gestión integral y eficiente del recurso hídrico.</p>
          <p>En este apartado podrás consultar documentos que hemos seleccionado para que conozcas un poco sobre el tema, como parte del compromiso por construir un futuro donde el agua sea motor de bienestar, equidad y resiliencia. Si tienes un documento y quieres que la población lo lea ve a la sección Voces del pueblo y ¡Compártelo!</p>
          <p>Porque planear hoy, es asegurar el agua de mañana.</p>
        </div>

        <div className={styles.rectangulo}>
          <div className={styles.scrollContainer}>
            <p> Plan Hídrico Metropolitano de Hidalgo ⚪ Plan Hídrico Metropolitano de Hidalgo ⚪ Plan Hídrico Metropolitano de Hidalgo</p>
            <p>⚪ Plan Hídrico Metropolitano de Hidalgo ⚪ Plan Hídrico Metropolitano de Hidalgo ⚪ Plan Hídrico Metropolitano de Hidalgo </p>
          </div>
        </div>

      </div>
    </section>
  );
}
