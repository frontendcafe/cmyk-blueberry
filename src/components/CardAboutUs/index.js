import React from "react";
import "./styles.scss";

function CardAboutUs({ name, role, links, img }) {
  return (
    <div className="cardAbout-container">
      <div className="cardAbout-container__image">
        <img src={img} alt="Imagen de perfil"></img>
      </div>
      <div className="cardAbout-container__box">
        <div className="box__title">
          <h1 className="box__title-text"> {name} </h1>
          <h2 className="box__title-text box__title-text--role"> {role} </h2>
        </div>
        <div className="cardAbout-container__icons">
          {links.map((link) => {
            return (
              <a href={link.link} key={link.link} target="_blank" rel="noreferrer" className="icons__vector">
                <img src={link.icon} alt="Icon"/>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardAboutUs;
