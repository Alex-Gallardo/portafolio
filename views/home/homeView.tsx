import React from "react";

// ESTILOS
import Styles from "./home.module.scss";

const HomeWiew: React.FC = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.part}>
        <div className={Styles.title}>
          <h1>My</h1> <h1>Portafolio</h1>
        </div>
        <div className={Styles.features}>
          <p>Developer</p>
          <p>Data Scients</p>
          <p>Web Design</p>
          <p>UI/UX</p>
        </div>
      </section>
      <section className={Styles.part}>
        <p>Hola mundo</p>
      </section>
    </main>
  );
};

export default HomeWiew;
