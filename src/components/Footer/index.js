import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
          className="footer__logo-wineberry"
        />
      </div>
      <div classname="footer__section">
        <div className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#BodegaWineberry" }}>
            Bodega Wineberry
          </Link>
        </div>
        <div className="footer__section-item">
          {" "}
          <Link to={{ pathname: "/", hash: "#nuestrosVinos" }}>
            Nuestros Vinos
          </Link>
        </div>
        <div className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#galeria" }}>Galeria</Link>{" "}
        </div>
        <div className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#contacto" }}>Contactanos</Link>
        </div>
        <div className="footer__section-item">
          <Link to={{ pathname: "/", hash: "#sobre-nosotros" }}>
            Sobre nosotros
          </Link>
        </div>
      </div>
      <div classname="footer__socialmedia">
        <div classname="footer__socialmedia-item">
          Seguinos en nuestras redes
        </div>
        <div classname="footer__socialmedia-icon">
        <a href ={'https://instagram.com/'}>
            <FontAwesomeIcon color="white" icon={faInstagram} />
          </a>
          <a href ={'https://twitter.com/'}>
            <FontAwesomeIcon color="white" icon={faTwitter} />
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
