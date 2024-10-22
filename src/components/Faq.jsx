import React, { useState } from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Das clases grupales?",
      answer: "Sí, ofrezco clases grupales en las que se puede aprender junto con otros estudiantes. También se pueden coordinar clases individuales si se prefiere.",
    },
    {
      question: "¿Das clases presenciales?",
      answer: "Según la zona y cantidad de horas, consultar. Principalmente doy virtual.",
    },
    {
      question: "¿Cómo se abona?",
      answer: "Al momento de agendar las clases se abona el costo de la misma por transferencia o depósito bancario para reservar el día y horario.",
    },
    {
      question: "¿Qué días y horarios das?",
      answer: "Doy de lunes a lunes (incluyendo fines de semana y feriados), cualquier horario. Consultar disponibilidad.",
    },
    {
      question: "¿Resolves exámenes?",
      answer: "No resuelvo exámenes en vivo. Sí podemos ver modelos de examen para practicar.",
    },
    {
      question: "¿Resolves trabajos prácticos?",
      answer: "No resuelvo trabajos prácticos a entregar. Sí podemos ver trabajos prácticos para practicar o estudiar el tema.",
    },
    {
      question: "¿Hay un número mínimo de clases que debo tomar?",
      answer: "No, no hay un número mínimo de clases. Puedes tomar las clases que necesites según tu disponibilidad y objetivos de aprendizaje.",
    },
    {
      question: "Quiero aprender por interés personal, ¿tengo que tener conocimientos previos?",
      answer: "No, arrancamos de cero.",
    },
    {
      question: "Quiero preparar una materia, ¿tengo que tener conocimientos previos?",
      answer: "No es necesario.",
    },
    {
      question: "¿Tienes guías de ejercicios de las materias?",
      answer: "En general sí, depende de la materia. De las materias que doy de UADE tengo todo. De otras universidades no siempre.",
    },
    {
      question: "¿Qué duración tienen las clases?",
      answer: "1 hora, 1 hora y media, o 2 horas.",
    },
    {
      question: "¿Das clases para otros países fuera de Argentina? ¿Cómo se abona?",
      answer: "Sí, doy clases para otros países. Se abona vía PayPal.",
    },
    {
      question: "¿Das clases en inglés?",
      answer: "Sí, tengo buen nivel de inglés por haber ido a primario y secundario bilingüe.",
    }
  ];
  

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className={styles.faqContainer}>
      <h1 className={styles.h1}>Preguntas Frecuentes</h1>
      <br />
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
            {faq.question}
          </div>
          <div
            className={`${styles.faqAnswer} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
