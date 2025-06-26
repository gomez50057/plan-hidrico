import styles from '@/styles/workTogether.module.css';
const imgBasePath = "/img/numbers/";

export default function WorkTogether() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.left}>
          <span className={styles.title}>
            <em>1.REHABILITACIÓN Y REVESTIMIENTO DE TODOS LOS CANALES PRINCIPALES, LATERALES Y SUBLATERALES:</em>
          </span>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              Los trabajos se realizarán de 2025 a 2028, durante los meses de octubre a marzo (Ciclo Agrícola Otoño – Invierno, con la finalidad de afectar lo menos posible el ciclo agrícola y la economía del productor.
            </li>
            <li>
              Habrá un corte técnico de agua de riego durante el periodo de ejecución de las obras.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bgImage}>
        <img src={`${imgBasePath}1.png`} alt="img_representativa" className={styles.floatingImg} />
      </div>
    </div>
  );
}
