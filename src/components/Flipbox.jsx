import React, { useState } from "react";
import styles from "./Flipbox.module.css";

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
          <button className={styles.btn}> Mas Información</button>
        </div>
        <div className={styles.flipBoxBack}>
          <p className={styles.p}>{backContent}</p>
        </div>
      </div>
    </div>
  );
};

const FlipBoxGrid = () => {
  const cardsData = [
    { title: "Cálculo financiero o matemática financiera ", backContent: "Especializado en UADE. Temas: capitalización y descuento (simple y compuesto), tasas (TNA, efectiva, activa, pasiva), equivalencia de tasas, inflación, operaciones con moneda extranjera, sistemas de amortización (francés, alemán, americano), rentas/anualidades, refinanciación de pasivos, bonos, y evaluación de proyectos de inversion (TIR, VAN, PAYBACK, IR)." },
    { title: "Finanzas corporativas", backContent: "Modelo de flujos de caja (FCA, FCD, FCE), riesgo y rendimiento de un portafolio, Markowitz, desvío estándar, varianza, covarianza, correlación, beta (cálculo, interpretación), WACC, estructura de capital, beta apalancado y desapalancado, CAPM, SML, valuación de la firma y del equity, con y sin crecimiento (DCF, DDM - modelo de dividendos descontados). FCFF. Capital de trabajo." },
    { title: "Introducción a economía", backContent: "Conceptos básicos de economía, micro y macroeconomía, tipos de mercados (competencia perfecta, monopolio, oligopolio), oferta y demanda, elasticidades, fallos de mercado, política monetaria y fiscal, inflación, producción y consumo, PBI, tipo de cambio y tasa de interés." },
    { title: "Introducción a las Finanzas", backContent: "Concepto, sistema financiero, mercado primario y secundario, áreas de las Finanzas, instrumentos, diferencia entre análisis y especulación." },
    { title: "Introducción a contabilidad", backContent: "Hechos económicos, variaciones permutativas y modificativas, presupuesto económico y financiero, rubros y cuentas, libro diario, mayor, balance de sumas y saldos, interpretación de estados contables e información complementaria, ratios." },
    { title: "Matemática para Cs. Económicas", backContent: "Operaciones básicas, fracciones, ecuaciones, inecuaciones, derivadas, matrices, sistema de ecuaciones, funciones (lineal, cuadrática, raíz cuadrada, raíz cúbica, homográfica, raíces, imagen, dominio, restricciones), factorización y simplificación, cálculo de beneficio, ingreso total, aplicaciones económicas, optimización (máximos y mínimos)." },
    { title: "Introducción a estadística", backContent: "Estadística descriptiva (medidas de tendencia central - media, mediana, moda - y de dispersión - rango, varianza, desvío), covarianza, correlación." },
    { title: "Asesoría en análisis económico-financiero para tesis", backContent: "Análisis del negocio (proyección de estados contables, ratios), inversión inicial, flujos de fondos (FEO, FCTN, FAF, FCFF), evaluación de proyectos, VAN, TIR, índice de rentabilidad, payback." },
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
