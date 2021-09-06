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
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const scrollToTop= () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <nav className="navbar">

            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <img className="icon-close" alt="Icon cierre" src={closeIcon}/>
                ) : (
                    <img alt="Icon menu" src={menuIcon}/>
            )}
            </div>

            <div className="logo-container">
                <a onclick= {scrollToTop} href='/'><img className='logo' alt="Logo Wineberry" src={logo}/></a>
            </div>

            <div className={click ? "nav-options active" : "nav-options"}>
                <ul>
                    <li className="option" onClick={closeMobileMenu}>
                        <img className="hidden" alt="Icon nuestra bodega" src={bodegaIcon}/>
                        <a href="#nuestrasBodegas">Bodega Wineberry</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <img className="hidden"  alt="Icon nuestros vinos" src={vinosIcon}/>
                        <a href="#nuestrosVinos">Nuestros vinos</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <img className="hidden"  alt="Icon galeria" src={galeriaIcon}/>
                        <a href="#galeria">Galeria</a>
                    </li>
                    <li className="option hidden" onClick={closeMobileMenu}>
                        <img className="hidden" alt="Icon sobre nosotros" src={nosotrosIcon}/>
                        <a className="hidden" href="#sobreNosotros">Sobre nosotros</a>
                    </li>
                    <li className="option hidden" onClick={closeMobileMenu}>
                        <img className="hidden" alt="Icon contacto" src={contactoIcon}/>
                        <a className="hidden" href="#contacto">Contactanos</a>
                    </li>
                </ul>
            </div>

            <button className="button">
                <a className="option-link" href="#contacto">Contactanos</a>
            </button>

            <div className="mobile-search">
                <img src={searchIcon} alt="Icon busqueda"/>
            </div>

        </nav>
    );
};
    export default Navbar;