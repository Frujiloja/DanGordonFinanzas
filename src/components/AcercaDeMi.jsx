import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AcercaDeMi.module.css";
import dan from "../assets/dan2.png";
import res1 from "../assets/res1.jpg";
import res2 from "../assets/res2.jpg";
import res3 from "../assets/res3.jpg";
import res4 from "../assets/res4.jpg";
import res5 from "../assets/res5.jpg";
import res6 from "../assets/res6.jpg";

const AcercaDeMi = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false, // Habilita el modo centrado
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="acerca" className={styles.acerca_container}>
      <div className={styles.acerca}>
        <div>
          <h1 className={styles.h1}>Hola, soy Dan!</h1>
          <p className={styles.p}>
            Docente de ciencias económicas, especializado en{" "}
            <strong>Finanzas</strong>. <br />
            <br /> Mi objetivo es ayudar a estudiantes universitarios y aquellos
            que buscan profundizar en su conocimiento sobre el mundo de las
            Finanzas, ofreciendo clases particulares personalizadas que se
            adaptan a sus necesidades individuales. <br />
            <br /> Cuento con un título de grado como licenciado en finanzas,
            egresado de la Universidad Argentina de la Empresa (UADE). Además,
            estoy finalizando mis estudios en la carrera de Economía, en la
            misma Universidad. <br />
            <br /> Me apasiona enseñar para brindar al alumno las herramientas
            necesarias para aprender conceptos del área de Finanzas y economía.
            Mis clases están diseñadas para ser interactivas y dinámicas,
            buscando que el alumno pueda realmente entender los conceptos que
            trabajamos, tratando de aprender más que memorizar, lo que hace
            mucho más fácil luego aplicar lo que vemos en las clases, ya sea en
            un examen o en la vida cotidiana. <br />
            <br /> Tengo experiencia dando clases a gran cantidad de alumnos, de
            muchas materias, niveles, universidades, etc. <br />
            <br /> Además, fui docente en la institución Capacitarte, en el
            curso Valuación de proyectos.
          </p>
        </div>
        <div>
          <img className={styles.img} src={dan} alt="foto dan" />
        </div>
      </div>
      {/* <div className={styles.res_container}>
        <img src={res1} className={styles.res} alt="res1" />
        <img src={res2} className={styles.res} alt="res2" />
        <img src={res3} className={styles.res} alt="res3" />
      </div> */}
      <br />
      <Slider {...settings} className={styles.image}>
        <div className={styles.hv}>
          <img src={res1} className={styles.res} alt="res1" />
        </div>
        <div className={styles.hv}>
          <img src={res5} className={styles.res} alt="res5" />
        </div>
        <div className={styles.hv}>
          <img src={res3} className={styles.res} alt="res3" />
        </div>
        <div className={styles.hv}>
          <img src={res4} className={styles.res} alt="res4" />
        </div>
        <div className={styles.hv}>
          <img src={res2} className={styles.res} alt="res2" />
        </div>
        <div className={styles.hv}>
          <img src={res6} className={styles.res} alt="res6" />
        </div>
      </Slider>
    </div>
  );
};

export default AcercaDeMi;
