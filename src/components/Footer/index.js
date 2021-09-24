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
      <div className="footer__logo">
        <img
          src={Logo}
          title="Logo Wineberry"
          alt="Logo Wineberry"
          className="footer__logo-img"
        />
      </div>
      <div className="footer__section">
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
      <div className="footer__socialmedia">
        <div className="footer__socialmedia-title">
          Seguinos en nuestras redes
        </div>
        <div className="footer__socialmedia-icon">
          <a href={"https://instagram.com/"}>
            <FontAwesomeIcon color="white" icon={faInstagram} className="fa-lg" />
          </a>
          <a href={"https://twitter.com/"}>
            <FontAwesomeIcon color="white" icon={faTwitter} className="fa-lg" />
          </a>
          <a href={"https://facebook.com/"}>
            <FontAwesomeIcon color="white" icon={faFacebook} className="fa-lg" />
          </a>
        </div>
        <div className="footer__socialmedia-wsp">
          <FontAwesomeIcon color="white" icon={faWhatsapp} className="fa-lg" />
          <span>(+54 9) 11 26062011</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
