import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <section>
      <div className={styles.aboutContainer}>
        <div className={styles.logoAcuerdo}>
          hola
        </div>
        <div className={styles.aboutTxt}>
          <h2><span>Transformando</span> el <span>Futuro</span> con <span>Agua:</span> Una <span className="spanDoarado">Visión Hídrica</span> para <span className="spanDoarado">Hidalgo</span></h2>
          <h3>Compromiso con el bienestar, desarrollo y sustentabilidad de nuestras metrópoli</h3>
          <p>El Gobierno del Estado de Hidalgo, con una visión integral, participativa y centrada en el bienestar de las y los hidalguenses, impulsa el Plan Hídrico Metropolitano, una estrategia transformadora que forma parte del Plan Estatal de Desarrollo.</p>
          <p>Este proyecto se articula en torno a cuatro ejes fundamentales: acceso universal al agua potable, saneamiento responsable, prevención de riesgos por inundaciones y modernización del riego agrícola. Cada eje está diseñado para detonar el desarrollo sostenible, fortalecer la justicia social y asegurar un futuro resiliente.</p>
        </div>
      </div>
    </section>
  );
}
