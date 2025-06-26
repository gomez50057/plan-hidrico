import { trabajar_conjunto } from "@/utils/workTogetherUtils";
import styles from '@/styles/workTogether.module.css';

const imgBasePath = "/img/numbers/";

export default function WorkTogether() {
  return (
    <div className={styles.containerWorkTogether}>
      <h2><span>¿Cómo Vamos</span> a <span className="spanDoarado">Trabajar</span> en <span className="spanDoarado">Conjunto?</span></h2>
      {Object.values(trabajar_conjunto).map((data, idx) => (
        <div className={styles.container} key={idx}>
          <div className={styles.text}>
            <div className={styles.left}>
              <span className={styles.title}>
                <em>{data.titulo}</em>
              </span>
            </div>
            <div className={styles.right}>
              <ul>
                {Array.isArray(data.items) && data.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.bgImage}>
            <img src={`${imgBasePath}${data.img}`} alt="img_representativa" className={styles.floatingImg} />
          </div>
        </div>
      ))}
    </div>
  );
}
