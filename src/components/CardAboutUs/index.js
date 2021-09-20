import React from "react";
import { cards } from "./data";
import "./styles.scss";
import { linkedin } from "../../assets/linkedin.png";
import { github } from "../../assets/github.png";

function CardAboutUs() {
  return (
    <div className="container">
      {cards.map((card) => (
        <div className="card-container">
          <img className="card-container__image" src={card.image}></img>
          <div className="card-container__box">
            <h1> {card.name} </h1>
            <h2> {card.role} </h2>
            <p> {card.mail} </p>
            <div className="card-container__box__icons">
              <a href={card.links.linkedin}>
                <img
                  className="card-container__box__icons--linkedin"
                  src={linkedin}
                ></img>
              </a>
              <a href={card.links.github}>
                <img
                  className="card-container__box__icons--github"
                  src={github}
                ></img>
              </a>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
export default CardAboutUs;
