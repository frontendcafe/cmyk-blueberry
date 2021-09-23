import React from "react";
import "./styles.scss";
import linkedinVector from "../../assets/linkedinVector.svg";
import githubVector from "../../assets/githubVector.svg";

function CardAboutUs({ name, role, mail, links, img }) {
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
          <a href={links.linkedin} className="icons__vector">
            <img src={linkedinVector} />
          </a>
          <a href={links.github} className="icons__vecotor">
            <img src={githubVector} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardAboutUs;
