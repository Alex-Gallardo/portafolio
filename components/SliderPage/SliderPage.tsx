import React, { useState, useEffect } from "react";
import Scroll from "../Scroll/Scroll";

// ESTILOS
import Styles from "./SliderPage.module.scss";

interface DataSlider {
  pathname: string | string[];
  page: any;
  description?: string[];
}

export interface SliderPageProps {
  data: DataSlider;
  changePage: any;
  push?: any;
  animate?: boolean;
}

const SliderPage: React.FC<SliderPageProps> = (props: SliderPageProps) => {
  // Estado
  const [animate, setAnimate] = useState<string>("");
  const [rowAnimate, setRowAnimate] = useState<string[]>(["", ""]);
  const [boxAnimate, setBoxAnimate] = useState<string>("");

  // useEffect
  useEffect(() => {
    if (props.animate) {
      setAnimate(Styles.boxtop_anime);
      setRowAnimate([Styles.row_left, Styles.row_right]);
      setBoxAnimate(Styles.boxbottom_anime);
    } else {
      setAnimate("");
      setRowAnimate(["", ""]);
      setBoxAnimate("");
    }
  }, [props.animate]);

  // Cambiar pagina
  const computePage = (val: boolean) => () => {
    props.changePage(val);
  };

  return (
    <div className={Styles.container}>
      <section className={Styles.cont_home}>
        <div className={Styles.slider}>
          <div
            className={`${Styles.arrow} ${rowAnimate[0]}`}
            onClick={computePage(false)}
          >
            {"<"}
          </div>
          <h1 className={animate}>{props.data.pathname}</h1>
          <div
            className={`${Styles.arrow} ${rowAnimate[1]}`}
            onClick={computePage(true)}
          >
            {">"}
          </div>
        </div>
        <div className={`${Styles.info} ${boxAnimate}`}>
          <div className={Styles.nada} />
          <Scroll/>
          <div className={Styles.info_tec}>
            {props.data.description?.map((text: string, i: number) => {
              return <p key={i}>{text}</p>;
            })}
          </div>
        </div>
      </section>
      {props.data.page}
    </div>
  );
};

export default SliderPage;
