import React from "react";
import logo from "../../assets/logo.png"
import "./style.scss"
import data from "./data"

const AboutUS = () => {
    return(
        <div className="mainDiv">
            <div className="mainDiv__img">
                <img src={logo}></img>
            </div>
            <div className="mainDiv__text">
                <p className="text__content">"Wineberry surgió a traves del proyecto CMYK creada por Frontend Café
                donde impulsan el desarrollo de proyectos colaborativos realizados por miembros de la comunidad con 
                el objetivo de ganar experiencia en un entorno profesional. Este proyecto es el resultado del 
                <b> trabajo en equipo, iteraciones y mucho esfuerzo.</b> </p>
                <br/>
                <p className="text__content"> Somos un equipo de diseñadores y desarrolladores
                que busca demostrar todo su conocimiento y seguir aprendiendo dentro del mundo digital."</p>
            </div>
        </div>
    )
}

export default AboutUS;