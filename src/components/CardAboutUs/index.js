import React from "react";
import "./styles.scss";

function CardAboutUs({ name, role, mail, links, img }) {
  console.log(links);
  return (
    <div className="card-container">
      <div className="card-container__image">
        <img className="image__content" src={img} alt="Imagen de perfil"></img>
      </div>
      <div className="card-container__box">
        <div className="box__title">
          <h1 className="title__text"> {name} </h1>
          <h2 className="title__text title__text-role"> {role} </h2>
        </div>
        <p className="box__mail"> {mail} </p>
        <div className="card-container__box--icons">
          {links.map((link) => {
            return (
              <a href={link.link} className="icons__vector">
                <img src={link.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardAboutUs;
