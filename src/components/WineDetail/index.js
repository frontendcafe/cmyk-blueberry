import React from "react";
import "./styles.scss";
import colorIconM from "../../assets/color-icon.svg";
import aromaIconM from "../../assets/aroma-icon.svg";
import saborIconM from "../../assets/sabor-icon.svg";
import colorIconD from "../../assets/color-iconD.svg";
import aromaIconD from "../../assets/aroma-iconD.svg";
import saborIconD from "../../assets/sabor-iconD.svg";
import prensa from "../../assets/prensa.png";
import Button from '../Button/index';

const WineDetail = ({
  title,
  description,
  composition,
  color,
  aroma,
  sabor,
  maridaje,
  background,
  img,
}) => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <section className={`detail detail--${background}`}>
      <div className="detail__img">
        <img src={img} alt="vino" />
      </div>
      <section className="detail__section detail__section--first">
        <h1 className="detail__section-title detail__section-title--primary ">
          {title}
        </h1>
        <p className="detail__section-text">{description}</p>
      </section>
      <section className="detail__section detail__section--second">
        <h2 className="detail__section-title detail__section-title--secondary">
          COMPOSICION VARIETAL
        </h2>
        <p className="detail__section-text">{composition}</p>
      </section>

      <section className="detail__section detail__section--third">
        <h2 className="detail__section-title detail__section-title--secondary">
          NOTAS DE CATA
        </h2>
        <div className="detail__section-item">
          <img
            className="icon--desktop"
            src={colorIconD}
            alt="Icon sabor"
          ></img>
          <img className="icon--mobile" src={colorIconM} alt="Icon color"></img>
          <h3>Color:</h3>
          <p>{color}</p>
        </div>
        <div className="detail__section-item">
          <img
            className="icon--desktop"
            src={aromaIconD}
            alt="Icon sabor"
          ></img>
          <img className="icon--mobile" src={aromaIconM} alt="Icon aroma"></img>
          <h3>Aroma:</h3>
          <p>{aroma}</p>
        </div>
        <div className="detail__section-item">
          <img
            className="icon--desktop"
            src={saborIconD}
            alt="Icon sabor"
          ></img>
          <img className="icon--mobile" src={saborIconM} alt="Icon sabor"></img>
          <h3>Sabor:</h3>
          <p>{sabor}</p>
        </div>
      </section>
      <section className="detail__section detail__section--fourth">
        <h2 className="detail__section-title detail__section-title--secondary">
          MARIDAJE SUGERIDO
        </h2>
        <p className="detail__section-text">{maridaje}</p>
      </section>
      <section className="detail__section detail__section--fifth">
        <Button
          variant="transparent"
          onClick={goBack}
          clases="detail__section-button"
        >
          Volver
        </Button>
        <img
          className="detail__section-img"
          src={prensa}
          alt="Prensa de uvas azul"
        />
      </section>
    </section>
  );
};

export default WineDetail;
