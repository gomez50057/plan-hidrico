import styles from "../../styles/knowledge/About.module.css";

export default function About() {
  return (
    <section>
      <div className={styles.aboutContainer}>
        <div className={styles.logoAcuerdo}>
          hola
        </div>
        <div className={styles.aboutTxt}>
          <h2><span className="spanDoarado">Ecos</span> del <span>Territorio Hídrico</span></h2>
          <p>Una sección del sitio Plan Hídrico Metropolitano de Hidalgo donde el conocimiento ciudadano toma la palabra.</p>
          <p>Ecos del Territorio Hídrico es un espacio dedicado a amplificar las voces, ideas y saberes de quienes viven, piensan y defienden el agua como bien común. Aquí, la ciudadanía es protagonista en la construcción colectiva de soluciones y miradas sobre el territorio hídrico metropolitano.</p>
          <p>Creemos que toda experiencia, reflexión o propuesta tiene valor. Por eso, invitamos a todas y todos a compartir artículos de opinión, ensayos, estudios independientes, relatos comunitarios y cualquier expresión escrita que contribuya a enriquecer la visión hídrica de Hidalgo desde abajo y en plural.</p>
          <p>Porque cuando compartimos el conocimiento, sembramos futuro. Porque en cada voz, hay un eco que transforma.</p>
        </div>

        <div className={styles.rectangulo}>
            <p>Plan Hídrico Metropolitano de Hidalgo</p>
          </div>
      </div>
    </section>
  );
}
