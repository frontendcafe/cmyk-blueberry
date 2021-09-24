import React from "react";
import "./style.scss";
import { useHistory } from "react-router";
import { card } from "./data";
import image from "../../assets/imagen-vindano-1.png";
import Button from "../Button";

function CardMainMobile() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <div className="card-container">
      <div className="card-container__main">
        <h1 className="card-container__main--title">{card.title}</h1>
        <p className="card-container__main--paragraph">{card.description}</p>
      </div>
      <div className="card-container__image">
        <img src={image} alt="imagen de una botella de vino" />
      </div>
      <div className="card-container__cards">
        {card.paragraphs.map((card) => (
          <div className="card-container__cards--card">
            <h1 className="card-container__cards--card--title">{card.title}</h1>
            <p className="card-container__cards--card--paragraph">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <Button
        variant="transparent"
        text="Volver"
        clases="card-container__button"
        onClick={handleClick}
      ></Button>
    </div>
  );
}

export default CardMainMobile;
