import React from "react";
import styles from "./Home.module.css";

const Home = () => {

  const handleWhatsAppConversion = () => {
    window.gtag("event", "conversion", {
      send_to: "AW-865325801/NEsiCKmJ0ewZEOmlz5wD",
      event_label: "WhatsApp",
      value: 2, // Puedes ajustar el valor si es relevante
    });
  };

  return (
    <div id="home" className={styles.imgbg}>
      <h1 className={styles.h1}>Clases y Cursos</h1>
      <h2 className={styles.h2}>Aprendé Finanzas de manera simple</h2>
      <a
        href="https://wa.me/5491140793729"
        onClick={handleWhatsAppConversion}
        target="_blank"
        className={styles.btn2}
      >
        Agendá tu clase!
      </a>
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
            Matemática, Introducción a la Estadística y Asesoría para tesis en
            análisis económico-financiero
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
