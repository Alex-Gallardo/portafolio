import React from "react";

// ESTILOS
import Styles from "./resume.module.scss";

const Resume: React.FC = () => {
  return (
    <main className={Styles.container}>
      <h1>Resumen</h1>
      <div className={Styles.cont_info}>
        <section className={Styles.info}>
          <h1>Cursos</h1>
          <article className={Styles.article}>
            <h2>2017 - 2018</h2>
            <h3>Supervisor digital</h3>
            <h4>Encargado de proyecto digital</h4>
            <p>Art Design</p>
            <p>UI/UX </p>
            <p>Front End</p>
          </article>
        </section>
        <section className={Styles.info}>
          <h1>Experiencias</h1>
          <article className={Styles.article}>
            <h2>2020 - 2021</h2>
            <h3>Front End Developer</h3>
            <h4>Web developer</h4>
            <p>Front End</p>
            <p>Back End</p>
          </article>
          <article className={Styles.article}>
            <h2>2019 - 2020</h2>
            <h3>Full Stack Developer</h3>
            <h4>Programador Web</h4>
            <p>Front End</p>
            <p>Back End</p>
          </article>
        </section>
        <section className={Styles.info}>
          <h1>Skills</h1>
          <article className={Styles.article}>
            <h3>Front End</h3>
            <p>React</p>
            <p>Next</p>
            <p>Typescript</p>
            <p>Javascript</p>
            <p>SASS</p>
            <p>CSS</p>
          </article>
          <article className={Styles.article}>
            <h3>Back End</h3>
            <p>Typescript</p>
            <p>Node</p>
            <p>Python</p>
          </article>
          <article className={Styles.article}>
            <h3>Database</h3>
            <p>SQL</p>
            <p>MongoDB</p>
            <p>Firebase</p>
          </article>
          <article className={Styles.article}>
            <h3>Mobile Apps</h3>
            <p>Flutter</p>
            <p>Dart</p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Resume;
