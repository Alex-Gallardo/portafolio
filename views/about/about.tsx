import React from "react";

// ESTILOS
import Styles from "./about.module.scss";

const About: React.FC = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.cont_img}>
        <img
          src="https://images.pexels.com/photos/2224699/pexels-photo-2224699.jpeg?auto=compress"
          alt="Personal photo"
        />
      </section>
      <div className={Styles.cont_info}>
        <article className={Styles.info}>
          <h1>A bit about myself</h1>
          <h3>Just a bit</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            nihil!
          </p>
          <h3>Clients</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            accusantium eos recusandae molestias minus voluptate sunt placeat
            non cupiditate maxime.
          </p>
          <h3>Adwars</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            quidem, corporis alias consectetur recusandae minus expedita atque.
            At tempora voluptates maiores atque accusantium aperiam eveniet
            fugiat, nobis natus expedita sapiente?
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;
