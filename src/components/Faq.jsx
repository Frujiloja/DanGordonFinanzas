import React, { useState } from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Das clases grupales?",
      answer: "Sí.",
    },
    {
      question: "¿Das clases presenciales?",
      answer: "No, solamente se dan clases en modalidad virtual.",
    },
    {
      question: "¿Cómo se abona?",
      answer: "Al momento de agendar las clases se abona el costo de la misma por transferencia o depósito bancario para reservar el día y horario.",
    },
    {
      question: "¿Qué días y horarios hay disponibles?",
      answer: "A convenir, con amplia disponibilidad.",
    },
    {
      question: "¿Resolves exámenes?",
      answer: "No resuelvo exámenes en vivo. Podemos ver modelos de examen para practicar.",
    },
    {
      question: "¿Resolves trabajos prácticos?",
      answer: "No resuelvo trabajos prácticos a entregar. Podemos ver trabajos prácticos para estudiar el tema.",
    },
    {
      question: "¿Hay un número mínimo de clases que debo tomar?",
      answer: "No.",
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
      question: "¿Qué duración tienen las clases?",
      answer: "1 hora, 1 hora y media, o 2 horas.",
    },
    {
      question: "¿Das clases para otros países fuera de Argentina? ¿Cómo se abona?",
      answer: "Sí, doy clases para otros países. Se abona vía PayPal.",
    },
    {
      question: "¿Das clases en inglés?",
      answer: "Sí.",
    }
  ];
  

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className={styles.faqContainer}>
      <h1 className={styles.h1}>Preguntas frecuentes</h1>
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
