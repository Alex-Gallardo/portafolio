import React from "react";

// ESTILOS
import Styles from "./Scroll.module.scss";

const Scroll: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.point} />
    </div>
  );
};

export default Scroll;
