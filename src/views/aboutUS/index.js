import React from "react";
import logo from "../../assets/logo.png";
import "./styles.scss";
import CardAboutUs from "../../components/CardAboutUs";
import { cards } from "./data";
import { useWindow } from "../../hooks/useWindow";

const AboutUS = () => {
  const window = useWindow().width;

  return (
    <div id="sobre-nosotros" className="mainDiv">
      {window > 768 ? (
        <div className="mainDiv__img">
          <img src={logo} alt="Logo Wineberry"/> 
        </div>
      ) : (
          <h2 className="mainDiv-title">Sobre nosotros</h2>
      )}
      <div className="mainDiv__text">
        <p className="mainDiv__text-content">
          "Wineberry surgió a traves del proyecto CMYK creada por Frontend Café
          donde impulsan el desarrollo de proyectos colaborativos realizados por
          miembros de la comunidad con el objetivo de ganar experiencia en un
          entorno profesional. Este proyecto es el resultado del
          <b> trabajo en equipo, iteraciones y mucho esfuerzo.</b>{" "}
        </p>
        <br />
        <p className="mainDiv__text-content">
          {" "}
          Somos un equipo de diseñadores y desarrolladores que busca demostrar
          todo su conocimiento y seguir aprendiendo dentro del mundo digital."
        </p>
        <h2>Nuestro equipo</h2>
      </div>
      <div className="mainDiv__cards">
        {cards.map((card) => {
          return (
            <CardAboutUs
              name={card.name}
              role={card.role}
              links={card.links}
              img={card.img}
              key= {card.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUS;
