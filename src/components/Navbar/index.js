import React, {useState} from 'react';
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
    const [isOpen, setClick] = useState(false);
    const handleClick = () => setClick(!isOpen);
    const closeMobileMenu = () => setClick(false);
    const scrollToTop= () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <nav className="navbar">

            <div className="navbar__mobile" onClick={handleClick}>
                {isOpen ? (
                    <img className="navbar__mobile-icon" alt="Icon cierre" src={closeIcon}/>
                ) : (
                    <img alt="Icon menu" src={menuIcon}/>
            )}
            </div>

            <div className="navbar__logo">
                <a className="navbar__logo-link" onClick= {scrollToTop} href='/'><img className='navbar__logo-img' alt="Logo Wineberry" src={logo}/></a>
            </div>

            <div className={isOpen ? "navbar__menu active" : "navbar__menu"}>
                <ul>
                    <li className="navbar__menu-item" onClick={closeMobileMenu}>
                        <img className="hidden" alt="Icon nuestra bodega" src={bodegaIcon}/>
                        <a href="#nuestrasBodegas">Bodega Wineberry</a>
                    </li>
                    <li className="navbar__menu-item" onClick={closeMobileMenu}>
                        <img className="hidden"  alt="Icon nuestros vinos" src={vinosIcon}/>
                        <a href="#nuestrosVinos">Nuestros vinos</a>
                    </li>
                    <li className="navbar__menu-item" onClick={closeMobileMenu}>
                        <img className="hidden"  alt="Icon galeria" src={galeriaIcon}/>
                        <a href="#galeria">Galeria</a>
                    </li>
                    <li className="navbar__menu-item hidden" onClick={closeMobileMenu}>
                        <img className="hidden" alt="Icon sobre nosotros" src={nosotrosIcon}/>
                        <a className="hidden" href="#sobreNosotros">Sobre nosotros</a>
                    </li>
                    <li className="navbar__menu-item hidden" onClick={closeMobileMenu}>
                        <img className="hidden" alt="Icon contacto" src={contactoIcon}/>
                        <a className="hidden" href="#contacto">Contactanos</a>
                    </li>
                </ul>
            </div>

            <button className="navbar__button">
                <a className="navbar__button-link" href="#contacto">Contactanos</a>
            </button>

            <div className="navbar__search">
                <img src={searchIcon} alt="Icon busqueda"/>
            </div>

        </nav>
    );
};
    export default Navbar;