import React from "react";

// ESTILOS
import Styles from "./index.module.scss";

// HEAD
import Head from "next/head";

// COMPONENTES
import Navbar from "../../components/Navbar/Navbar";

// VISTAS
import Resume from "../../views/resume/resume";

const Index: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Alex Gallardo - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Resume/>
    </div>
  );
};

export default Index;
