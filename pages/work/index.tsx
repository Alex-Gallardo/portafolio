import React from "react";

// HEAD
import Head from "next/head";

// ESTILOS
import Styles from "./index.module.scss";

// VISTAS
import Navbar from "../../components/Navbar/Navbar";
import Work from "../../views/work/work";
import SliderPage from "../../components/SliderPage/SliderPage";

const Index: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Alex Gallardo - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SliderPage>
        <Work />
      </SliderPage>
    </div>
  );
};

export default Index;
