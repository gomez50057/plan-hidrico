import React from 'react';
import Slider from './Slider';
import { ejesPlanEstatal } from '../../../utils/planEstal';
import styles from "../../../styles/Ejes.module.css";

export default function PlanEstatal() {
  return (
    <section className={styles.ejes}>
      <Slider items={ejesPlanEstatal} />
    </section>
  );
}