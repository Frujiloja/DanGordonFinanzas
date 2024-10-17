import React, { useState } from "react";
import styles from "./FlipBox.module.css";

const FlipBox = ({ title, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.flipBox} ${isFlipped ? styles.flip : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.flipBoxInner}>
        <div className={styles.flipBoxFront}>
          <h3>{title}</h3>
        </div>
        <div className={styles.flipBoxBack}>
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
};

const FlipBoxGrid = () => {
  const cardsData = [
    { title: "Cálculo financiero o matemática financiera ", backContent: "Especializado en UADE. Temas: capitalización y descuento (simple y compuesto), tasas (TNA, efectiva, activa, pasiva), equivalencia de tasas, inflación, operaciones con moneda extranjera, amortización (francés, alemán, americano), rentas/anualidades, bonos, y análisis de inversión (TIR, VAN, PAYBACK)." },
    { title: "Finanzas corporativas", backContent: "Modelo de flujos de caja (FCA, FCD, FCE), riesgo y rendimiento de un portafolio, Markowitz, desvío estándar, varianza, covarianza, correlación, beta (cálculo, interpretación), WACC, estructura de capital, beta apalancado y desapalancado, CAPM, SML, valuación de la firma y del equity, con y sin crecimiento (DCF, DDM - modelo de dividendos descontados). FCFF. Capital de trabajo." },
    { title: "Introducción a economía", backContent: "Incluye conceptos básicos de economía, micro y macroeconomía, tipos de mercados (competencia perfecta, monopolio, oligopolio), oferta y demanda, elasticidades, bienes, fallos de mercado, política monetaria y fiscal, inflación, producción y consumo, PBI, tipo de cambio y tasa de interés." },
    { title: "Introducción a las finanzas", backContent: "Concepto, sistema financiero, mercado primario y secundario, áreas de las finanzas, instrumentos, diferencia entre análisis y especulación." },
    { title: "Introducción a contabilidad", backContent: "Hechos económicos, variaciones permutativas y modificativas, rubros y cuentas, libro diario, mayor, balance de sumas y saldos, interpretación de estados contables e información complementaria, ratios." },
    { title: "Matemática", backContent: "Operaciones básicas, fracciones, ecuaciones, inecuaciones, derivadas, matrices, sistema de ecuaciones, funciones (lineal, cuadrática, raíz cuadrada, raíz cúbica, homográfica, raíces, imagen, dominio, restricciones), factorización y simplificación, cálculo de beneficio, ingreso total, aplicaciones económicas, optimización (máximos y mínimos)." },
    { title: "Introducción a estadística", backContent: "Estadística descriptiva (medidas de tendencia central - media, mediana, moda - y de dispersión - rango, varianza, desvío, covarianza, correlación)." },
    { title: "Asesoría en análisis económico-financiero para tesis", backContent: "Enfocado en la elaboración y mejora de tesis, abarcando temas clave y metodologías relevantes." },
  ];

  return (
    <div className={styles.grid}>
      {cardsData.map((card, index) => (
        <FlipBox key={index} title={card.title} backContent={card.backContent} />
      ))}
    </div>
  );
};

export default FlipBoxGrid;
