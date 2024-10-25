import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div id="home" className={styles.imgbg}>
      <h1 className={styles.h1}>Clases y Cursos</h1>
      <h2 className={styles.h2}>
        Aprendé Finanzas de manera simple
      </h2>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h3 className={styles.h3}>Finanzas y Matemática Financiera</h3>
          <p className={styles.p}>
            {" "}
            Cálculo Financiero, Finanzas Corporativas e Introducción a las
            Finanzas.
          </p>
          <a href="#clases" className={styles.btn}>
            Saber Más
          </a>
        </div>
        <div className={styles.box}>
          <h3 className={styles.h3}>Economía y Contabilidad</h3>
          <p className={styles.p}>
            {" "}
            Introducción a la Economía e Introducción a la Contabilidad
          </p>
          <a href="#clases" className={styles.btn}>
            Saber Más
          </a>
        </div>
        <div className={styles.box}>
          <h3 className={styles.h3}>Matemática y Estadística</h3>
          <p className={styles.p}>
            {" "}
            Matemática, Introducción a la Estadística y Asesoría en análisis
            económico-financiero
          </p>
          <a href="#clases" className={styles.btn}>
            Saber Más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
