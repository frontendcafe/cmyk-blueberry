import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon.svg';
import closeIcon from '../../assets/close-icon.svg';
import bodegaIcon from '../../assets/bodega-icon.svg';
import vinosIcon from '../../assets/vinos-icon.svg';
import galeriaIcon from '../../assets/galeria-icon.svg';
import nosotrosIcon from '../../assets/nosotros-icon.svg';
import contactoIcon from '../../assets/contacto-icon.svg';
import searchIcon from '../../assets/search-icon.svg';
import './styles.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <nav className="navbar">
      <div className="navbar__mobile" onClick={handleClick}>
        {isOpen ? (
          <img
            className="navbar__mobile-icon"
            alt="Icon cierre"
            src={closeIcon}
          />
        ) : (
          <img alt="Icon menu" src={menuIcon} />
        )}
      </div>

      <div className="navbar__logo">
        <Link className="navbar__logo-link" onClick={scrollToTop} to="/">
          <img className="navbar__logo-img" alt="Logo Wineberry" src={logo} />
        </Link>
      </div>

      <div
        className={
          isOpen ? 'navbar__menu navbar__menu--active' : 'navbar__menu'
        }
      >
        <ul>
          <li className="navbar__menu-item" onClick={closeMobileMenu}>
            <img
              className="hidden"
              alt="Icon nuestra bodega"
              src={bodegaIcon}
            />
            <Link
              to={{
                pathname: '/',
                hash: '#nuestrasBodegas',
              }}
            >
              Bodega Wineberry
            </Link>
          </li>
          <li className="navbar__menu-item" onClick={closeMobileMenu}>
            <img className="hidden" alt="Icon nuestros vinos" src={vinosIcon} />
            <Link
              to={{
                pathname: '/',
                hash: '#nuestrosVinos',
              }}
            >
              Nuestros vinos
            </Link>
          </li>
          <li className="navbar__menu-item" onClick={closeMobileMenu}>
            <img className="hidden" alt="Icon galeria" src={galeriaIcon} />
            <Link
              to={{
                pathname: '/',
                hash: '#galeria',
              }}
            >
              Galeria
            </Link>
          </li>
          <li className="navbar__menu-item hidden" onClick={closeMobileMenu}>
            <img
              className="hidden"
              alt="Icon sobre nosotros"
              src={nosotrosIcon}
            />
            <Link className="hidden" to="#sobreNosotros">
              Sobre nosotros
            </Link>
          </li>
          <li className="navbar__menu-item hidden" onClick={closeMobileMenu}>
            <img className="hidden" alt="Icon contacto" src={contactoIcon} />
            <Link className="hidden" to="#contacto">
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
      <Link className="navbar__contact" to="#contacto">
        <Button
          variant="primary"
          text="Contactanos"
          clases="navbar__contact-btn"
        ></Button>
      </Link>

      <div className="navbar__search">
        <img src={searchIcon} alt="Icon busqueda" />
      </div>
    </nav>
  );
};
export default Navbar;
