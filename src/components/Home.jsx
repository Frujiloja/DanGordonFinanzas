import React from "react";
import styles from "./Home.module.css"

const Home = () => {
    return(
        <div className={styles.imgbg}>
            <h1 className={styles.h1}>Clases y Cursos</h1>
            <h2 className={styles.h2}>Aprendé y disfrutá del mundo de las finanzas</h2>
        </div>
    )
}

export default Home;