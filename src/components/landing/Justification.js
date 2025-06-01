"use client";

import React from 'react';
import Slider from './justification/Slider';
import styles from "@/styles/Ejes.module.css";

export default function About() {
  return (
    <section className={styles.ejes}>
      <Slider items={Slider} />
    </section>
  );
}