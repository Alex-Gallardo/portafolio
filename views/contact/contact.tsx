import React from "react";

// ESTILOS
import Styles from "./contact.module.scss";

const Contact: React.FC = () => {
  return (
    <main className={Styles.container}>
      <div className={Styles.contact}>
        <h1>alexg@wearelua.com</h1>
      </div>
      <div className={Styles.social}>
        <a href='/'>Instagram</a>
        <a href='/'>TickTok</a>
        <a href='/'>Facebook</a>
        <a href='/'>GitHub</a>
        <a href='/'>Linkedin</a>
      </div>
    </main>
  );
};

export default Contact;
