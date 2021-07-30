import * as React from "react";

// HEADER
import Head from "next/head";

// COMPONENTES
import Navbar from "../../components/Navbar/Navbar";

// VISTAS
import Contact from "../../views/contact/contact";

// ESTILOS
import Styles from "./index.module.scss";

const Index: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Alex Gallardo - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Contact/>
    </div>
  );
};

export default Index;
