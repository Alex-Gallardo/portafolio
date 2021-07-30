import React, { useState, useEffect } from "react";

// RUTAS
import { useRouter } from "next/dist/client/router";

// HEAD
import Head from "next/head";

// ESTILOS
import Styles from "./index.module.scss";

// COMPONENTES
import Navbar from "../../components/Navbar/Navbar";
import SliderPage from "../../components/SliderPage/SliderPage";

// VISTAS
import Startpont from "../../views/work/Startpont/Startpont";
import Cars from "../../views/work/Cars/Cars";

interface DataSlider {
  pathname: string | string[];
  page: any;
  description?: string[];
}

const Index: React.FC = () => {
  // Estado
  const [posData, setPosData] = useState<number>(0);
  const [activeAnimate, setActiveAnimate] = useState<boolean>(false);

  // Router
  const router = useRouter();
  const { work } = router.query;

  // Data
  const data: DataSlider[] = [
    { 
      pathname: "startpont",
      page: <Startpont />,
      description: ["ART DESIGN", "DEVELOPMENT", "PHOTOGRAPHY"],
    },
    {
      pathname: "cars",
      page: <Cars />,
    },
  ];

  // useEffect
  useEffect(() => {
    data.forEach((dat: DataSlider, index: number) => {
      if (work === dat.pathname) setPosData(index);
    });
  }, [work]);

  // Funcion back/next
  const changeView = (val: boolean) => {
    if (val) {
      if (posData >= data.length - 1) {
        router.push(`${data[0].pathname}`);
        setActiveAnimate(true);
      } else {
        router.push(`${data[posData + 1].pathname}`);
        setActiveAnimate(true);
      }
    } else {
      if (posData <= 0) {
        router.push(`${data[data.length - 1].pathname}`);
        setActiveAnimate(true);
      } else {
        router.push(`${data[posData - 1].pathname}`);
        setActiveAnimate(true);
      }
    }

    setTimeout(() => {
      setActiveAnimate(false);
    }, 1000);
  };

  return (
    <div className={Styles.container}>
      <Head>
        <title>Alex Gallardo - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar animate={activeAnimate} />
      <SliderPage
        data={data[posData]}
        changePage={(e: any) => changeView(e)}
        animate={activeAnimate}
      />
    </div>
  );
};

export default Index;
