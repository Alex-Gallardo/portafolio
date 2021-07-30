import React from "react";

// ESTILOS
import Styles from "./work.module.scss";

interface WorkProps{
  name: string | string[]
}

const Work: React.FC<WorkProps> = (props: WorkProps) => {

  return (
    <main className={Styles.container}>
      <h1>{props.name}</h1>
      <p>Work, Work, Work...</p>
    </main>
  );
};

export default Work;
