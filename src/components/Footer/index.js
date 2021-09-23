import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/logo_wineberry.png";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div classname="footer__logo">
        <img
          src={Logo}
          title="Logo Wineberry"
          alt="Logo Wineberry"
          className="footer__logo-img"
        />
      </div>
      <div classname="footer__section">
      <ul>
        <li className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#BodegaWineberry" }}>
            Bodega Wineberry
          </Link>
        </li>
        <li className="footer__section-item">
          {" "}
          <Link to={{ pathname: "/", hash: "#nuestrosVinos" }}>
            Nuestros Vinos
          </Link>
        </li>
        <li className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#galeria" }}>Galeria</Link>{" "}
        </li>
        <li className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#contacto" }}>Contactanos</Link>
        </li>
        <li className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#sobre-nosotros" }}>
            Sobre nosotros
          </Link>
        </li>
        </ul>
      </div>
      <div classname="footer__socialmedia">
        <div classname="footer__socialmedia-item">
          Seguinos en nuestras redes
        </div>
        <div classname="footer__socialmedia-icon">
          <a href={"https://instagram.com/"}>
            <FontAwesomeIcon color="white" icon={faInstagram} />
          </a>
          <a href={"https://twitter.com/"}>
            <FontAwesomeIcon color="white" icon={faTwitter} />
          </a>
          <a href={"https://facebook.com/"}>
            <FontAwesomeIcon color="white" icon={faFacebook} />
          </a>
        </div>
        <div classname="footer__socialmedia-icon">
          <FontAwesomeIcon color="white" icon={faWhatsapp} />
          (+54 9) 11 26062011
        </div>
      </div>
    </div>
  );
};

export default Footer;
