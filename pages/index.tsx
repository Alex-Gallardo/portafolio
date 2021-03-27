import Head from "next/head";

// ESTILOS
import Styles from "../styles/index.module.scss";

// PAGINAS
import HomeView from "../views/home/homeView";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Alex Gallardo - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeView />
    </div>
  );
}
