import React from "react";

// ESTILOS
import Styles from "./SliderPage.module.scss";

export interface SliderPageProps {
  push?: any;
}

const SliderPage: React.FC<SliderPageProps> = ({ children }) => {
  return (
    <div className={Styles.container}>
      <section className={Styles.cont_home}>
        <div className={Styles.slider}>
          <div className={Styles.arrow}>{"<"}</div>
          <h1>Pixel</h1>
          <div className={Styles.arrow}>{">"}</div>
        </div>
        <div className={Styles.info}>
            <div className={Styles.nada}/>
            <div className={Styles.arrow_bottom}>|</div>
            <div className={Styles.info_tec}>
                <p>ART DIRECTION</p>
                <p>ART DIRECTION</p>
                <p>ART DIRECTION</p>
                <p>ART DIRECTION</p>
            </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default SliderPage;
