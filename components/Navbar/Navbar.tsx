import React, { useState } from "react";

// RUTAS
import { useRouter } from "next/dist/client/router";

// ESTILOS
import Styles from "./Navbar.module.scss";

const Navbar: React.FC = ({ children }) => {
  // Estados
  const [startClass, setStartClass] = useState<string>(Styles.container_nav);

  // Router
  const router = useRouter();

  // Cambio de ruta
  const outAnimation = (page: string) => () => {
    if (router.pathname != page) {
      setStartClass(`${Styles.container_nav} ${Styles.end}`);
      setTimeout(() => {
        router.push(page);
      }, 1000);
    }
  };

  return (
    <nav className={startClass}>
      <li>
        <p onClick={outAnimation("/")}>ALEX GALLARDO</p>
      </li>
      <div className={Styles.container_nav_options}>
        <li>
          <p onClick={outAnimation("/about")}>ABOUT</p>
        </li>
        <li>
          <p onClick={outAnimation("/work")}>WORK</p>
        </li>
        <li>
          <p onClick={outAnimation("/resume")}>RESUME</p>
        </li>
        <li>
          <p onClick={outAnimation("/contact")}>CONTACT</p>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
