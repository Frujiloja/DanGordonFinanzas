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
import res7 from "../assets/res7.jpg";
import res8 from "../assets/res8.jpg";
import res9 from "../assets/res9.jpg";
import res10 from "../assets/res10.jpg";
import res11 from "../assets/res11.jpg";
import res12 from "../assets/res12.jpg";
import res13 from "../assets/res13.jpg";
import res14 from "../assets/res14.jpg";
import res15 from "../assets/res15.jpg";
import res16 from "../assets/res16.jpg";
import res17 from "../assets/res17.jpg";
import res18 from "../assets/res18.jpg";
import res19 from "../assets/res19.jpg";
import res20 from "../assets/res20.jpg";
import res21 from "../assets/res21.jpg";
import png1 from "../assets/1.png";
import png2 from "../assets/2.png";
import png3 from "../assets/3.png";
import png4 from "../assets/4.png";
import png5 from "../assets/5.png";
import png6 from "../assets/6.png";
import png7 from "../assets/7.png";


const AcercaDeMi = () => {
  // Configuración para el slider de reseñas
  const settingsResenas = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: "unslick", // Desactiva este carrusel en pantallas pequeñas
      },
    ],
  };

  // Configuración para el slider de imágenes alternativo en pantallas pequeñas
  const settingsAlternativo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
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
            <br /> Cuento con un título de grado como licenciado en Finanzas,
            egresado de la Universidad Argentina de la Empresa (UADE). Además,
            soy licenciado en Economía, egresado de la misma universidad (nota final de tesis: 10). <br />
            <br /> Me apasiona enseñar para brindar al alumno las herramientas
            necesarias para aprender conceptos del área de Finanzas y Economía.
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

      {/* Carrusel para reseñas (visible en pantallas grandes) */}
      <Slider {...settingsResenas} className={styles.desktopSlider}>
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
        <div className={styles.hv}>
          <img src={res7} className={styles.res} alt="res7" />
        </div>
        <div className={styles.hv}>
          <img src={res8} className={styles.res} alt="res8" />
        </div>
        <div className={styles.hv}>
          <img src={res9} className={styles.res} alt="res9" />
        </div>
        <div className={styles.hv}>
          <img src={res10} className={styles.res} alt="res10" />
        </div>
        <div className={styles.hv}>
          <img src={res11} className={styles.res} alt="res11" />
        </div>
        <div className={styles.hv}>
          <img src={res12} className={styles.res} alt="res12" />
        </div>
        <div className={styles.hv}>
          <img src={res13} className={styles.res} alt="res13" />
        </div>
        <div className={styles.hv}>
          <img src={res14} className={styles.res} alt="res14" />
        </div>
        <div className={styles.hv}>
          <img src={res15} className={styles.res} alt="res15" />
        </div>
        <div className={styles.hv}>
          <img src={res16} className={styles.res} alt="res16" />
        </div>
        <div className={styles.hv}>
          <img src={res17} className={styles.res} alt="res17" />
        </div>
        <div className={styles.hv}>
          <img src={res18} className={styles.res} alt="res18" />
        </div>
        <div className={styles.hv}>
          <img src={res19} className={styles.res} alt="res19" />
        </div>
        <div className={styles.hv}>
          <img src={res20} className={styles.res} alt="res20" />
        </div>
        <div className={styles.hv}>
          <img src={res21} className={styles.res} alt="res21" />
        </div>
      </Slider>

      {/* Carrusel alternativo (visible solo en pantallas pequeñas) */}
      <Slider {...settingsAlternativo} className={styles.mobileSlider}>
        <div className={styles.hv}>
          <img src={png1} className={styles.res} alt="png1" />
        </div>
        <div className={styles.hv}>
          <img src={png2} className={styles.res} alt="png2" />
        </div>
        <div className={styles.hv}>
          <img src={png3} className={styles.res} alt="png3" />
        </div>
        <div className={styles.hv}>
          <img src={png4} className={styles.res} alt="png4" />
        </div>
      </Slider>
    </div>
  );
};

export default AcercaDeMi;
