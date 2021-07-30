import React, { useState, useEffect } from "react";

// RUTAS
import { useRouter } from "next/dist/client/router";

// ESTILOS
import Styles from "./Navbar.module.scss";

interface NavbarProps {
  animate?: boolean;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  // Estados
  const [startClass, setStartClass] = useState<string>(Styles.container_nav);
  const [animeClass, setAnimeClass] = useState<string>("");
  const [menu, setMenu] = useState<boolean>(false);

  // Router
  const router = useRouter();

  // useEffect
  useEffect(() => {
    if (props.animate) {
      setAnimeClass(Styles.container_nav_ani);
    } else {
      setAnimeClass("");
    }
  }, [props.animate]);

  // Cambio de ruta
  const outAnimation = (page: string) => () => {
    if (router.pathname != page) {
      setStartClass(`${Styles.container_nav} ${Styles.end}`);
      setTimeout(() => {
        router.push(page);
      }, 1000);
    }
  };

  // Abrir menu
  const openMenu = () => {
    setMenu(true);
  };

  // Cerrar menu
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className={`${startClass} ${animeClass}`}>
      <li>
        <p onClick={outAnimation("/")}>ALEXGALLARDO</p>
      </li>
      <div className={menu ? Styles.menu_config : Styles.nada}>
        <li onClick={closeMenu}>
          <p>Close X</p>
        </li>
        <li>
          <p onClick={outAnimation("/about")}>ABOUT</p>
        </li>
        <li>
          <p onClick={outAnimation("/work/startpont")}>WORK</p>
        </li>
        <li>
          <p onClick={outAnimation("/resume")}>RESUME</p>
        </li>
        <li>
          <p onClick={outAnimation("/contact")}>CONTACT</p>
        </li>
      </div>
      <li className={Styles.menu} onClick={openMenu}>
        <p>MENÚ</p>
      </li>
      <div className={Styles.container_nav_options}>
        <li>
          <p onClick={outAnimation("/about")}>ABOUT</p>
        </li>
        <li>
          <p onClick={outAnimation("/work/startpont")}>WORK</p>
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
