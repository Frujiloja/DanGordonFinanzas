// src/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const phoneNumber = "5491152280786"; // Reemplaza con el número de teléfono real

  const handleClick = () => {
    const message = `Hola, me interesa más información.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          <a href="mailto:dangordon5@hotmail.com" className={styles.contact}>
          dangordon5@hotmail.com
          </a>{" "}
          |{" "}
          <a
            className={styles.contact}
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5491140793729&text=Hola%2C+me+interesa+m%C3%A1s+informaci%C3%B3n+sobre+una+clase.&type=phone_number&app_absent=0"
          >
            +54 9 1140793729
          </a>{" "}
          |
          <a href="mailto:dangordon5@hotmail.com" className={styles.contact}>
            Contacto
          </a>{" "}
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.textv2}>
          © 2024 Creado por Martin Fuks
        </p>
      </div>
    </footer>
  );
};

export default Footer;
