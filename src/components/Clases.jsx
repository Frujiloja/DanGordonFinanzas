import React from "react";
import styles from "./Clases.module.css";
import arrow from "../assets/arrow.png";
import FlipBoxGrid from "./Flipbox";

const Clases = () => {
  return (
    <div id="clases" className={styles.clases_div}>
      <div className={styles.clases}>
        <h1 className={styles.h1}>Modalidad De Clases</h1>
        <h2 className={styles.h2}>
          Personalizadas a lo que precisa cada alumno.
        </h2>
        <div className={styles.opciones}>
          <div className={styles.apoyo}>
            <h1 className={styles.h33}>Apoyo universitario</h1>
            <h2 className={styles.h22}>
              Trabajamos teoría y práctica para prepararte para el examen.
            </h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.apoyo}>
            <h1 className={styles.h33}>Interés personal</h1>
            <h2 className={styles.h22}>
              Aprendé conceptos clave del mundo de las Finanzas y el mercado de
              capitales, ya sea para tu trabajo, negocio o emprendimiento o para
              poder comenzar a invertir tus ahorros.
            </h2>
          </div>
        </div>
        <div className={styles.text}>
          <ul className={styles.p}>
            <li className={styles.li}>Las clases pueden ser individuales o grupales.</li>
            <li className={styles.li}>Modalidad Online, utilizo la plataforma Google Meet.</li>
            <li className={styles.li}>
              Utilizo la notebook compartiendo pantalla, generalmente uso Excel
              o Word para resolver ejercicios.
            </li>
            <li className={styles.li}>
              Para ver la teoría utilizo un Ipad con un lápiz inteligente
              mediante el cual puedo escribir y dibujar cuadros y mapas
              conceptuales, como si fuera un papel.
            </li>
            <li className={styles.li}>
              Todo el material que hayamos trabajado se envía luego al alumno
              vía WhatsApp/mail.
            </li>
          </ul>
        </div>
        <img src={arrow} alt="arrow pic" className={styles.iconarrow} />
        <div className={styles.clasesytemas}>
          <h1 className={styles.h1}>Materias y Temas</h1>
          <h2 className={styles.h2}>
            <a href="#contact" className={styles.a}>
              Consultar por otras materias
            </a>
          </h2>
          <br />
          <div className={styles.materias}>
            <FlipBoxGrid></FlipBoxGrid>
            {/* <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.h3}>Economía y Contabilidad</h3>
              <p className={styles.p}>
                {" "}
                Introducción a la Economía e Introducción a la Contabilidad
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clases;
