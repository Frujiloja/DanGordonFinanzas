import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/LogoCompleto2.png";

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <img src={logo} alt="Dan Gordon Logo" className={styles.logo_img} />
      <ul className={styles.menuitems}>
        <li>
          <a className={styles.a} href="#profile">
            Inicio
          </a>
        </li>
        <li>
          <a className={styles.a} href="#acerca">
            Acerca de mi
          </a>
        </li>
        <li>
          <a className={styles.a} href="#experience">
            Clases
          </a>
        </li>
        <li>
          <a className={styles.a} href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
