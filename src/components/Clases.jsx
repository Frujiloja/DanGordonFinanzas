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
          Mis clases son personalizadas a lo que precisa cada alumno.
        </h2>
        <h2 className={styles.h2}>Hay dos tipos de clases: </h2>
        <div className={styles.opciones}>
          <div className={styles.apoyo}>
            <h1 className={styles.h33}>Apoyo universitario o secundario</h1>
            <h2 className={styles.h22}>
              Trabajamos teoría y practica para prepararte para el examen.
            </h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.apoyo}>
            <h1 className={styles.h33}>Interes personal o profesional</h1>
            <h2 className={styles.h22}>
              Aprende conceptos clave del mundo de las finanzas y el mercado de
              capitales, ya sea para tu trabajo, negocio o emprendimiento o para
              poder comenzar a invertir tus ahorros.
            </h2>
          </div>
        </div>
        <div className={styles.text}>
          <p className={styles.p}>
            Las clases pueden ser grupales o individuales. <br /> Modalidad
            Online, utilizo la plataforma Google Meet. <br /> Utilizo la
            notebook compartiendo pantalla, generalmente uso Excel o Word para
            resolver ejercicios. <br /> Para ver la teoría utilizo un Ipad con
            un lapiz inteligente mediante el cual puedo escribir y dibujar
            cuados y mapas conceptuales, como si fuera un papel. <br /> Todo el
            material que hayamos trabajado se envia luego al alumno via
            whatsapp/mail.
          </p>
        </div>
        <img
        src={arrow}
        alt="arrow pic"
        className={styles.iconarrow}
      />
        <div className={styles.clasesytemas}>
          <h1 className={styles.h1}>Materias y Temas</h1>
          <h2 className={styles.h2}>
            Este es un listado de las materias y temas que suelo dictar.
            Igualmente, no dudes en consultar por otras materias y te diré
            honestamente si creo que puedo ayudarte con eso.
          </h2>
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
