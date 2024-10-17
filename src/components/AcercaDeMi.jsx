import React from "react";
import styles from "./AcercaDeMi.module.css";
import dan from "../assets/dan2.png";
import arrow from "../assets/arrow.png";

const AcercaDeMi = () => {
  return (
    <div id="acerca" className={styles.acerca_container}>
      <div className={styles.acerca}>
        <div>
          <h1 className={styles.h1}>Hola, soy Dan</h1>
          <br />
          <p>
            Docente de ciencias económicas, especializado en Finanzas. Mi
            objetivo es ayudar a estudiantes universitarios y aquellos que
            buscan profundizar en su conocimiento sobre el mundo de las
            finanzas, ofreciendo clases particulares personalizadas que se
            adaptan a sus necesidades individuales. <br /><br /> Cuento con un título de
            grado como licenciado en finanzas, egresado de la Universidad
            Argentina de la Empresa (UADE). Además, estoy finalizando mis
            estudios en la carrera de Economía, en la misma Universidad. <br /><br /> Me
            apasiona enseñar para brindar al alumno de las herramientas
            necesarias para aprender conceptos del área de finanzas y economía.
            Mis clases están diseñadas para ser interactivas y dinámicas,
            buscando que el alumno pueda realmente entender los conceptos que
            trabajamos, tratando de aprender más que memorizar, lo que hace
            mucho más fácil luego aplicar lo que vemos en las clases, ya sea en
            un examen o en la vida cotidiana. <br /><br /> Tengo experiencia dando clases a
            gran cantidad de alumnos, de muchas materias, niveles,
            universidades, etc. <br /><br /> Además, fui docente de un curso en la
            institución Capacitarte, en el curso Valuación de proyectos.
          </p>
        </div>
        <div>
          <img className={styles.img} src={dan} alt="foto dan" />
        </div>
      </div>
      {/* <img
        src={arrow}
        alt="arrow pic"
        className={styles.iconarrow}
        onClick={() =>
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" })
        }
      /> */}
    </div>
  );
};

export default AcercaDeMi;
