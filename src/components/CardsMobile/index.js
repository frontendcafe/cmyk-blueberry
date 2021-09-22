import React, { useState } from 'react';
import Arrow from '../../assets/flecha_derecha.svg';
import './styles.scss'; 

const CardMobile = ( { title, description, logo, img } ) => {

    const [showMore, setMoreInfo] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setMoreInfo(!showMore);
        setAnimate(!animate);
    }

    return (
        <div className={`card-mobile ${ showMore ? "full-card" : "small-card"} ${ animate ? "openCard" : "closeCard" }`}>
            <div className="card-mobile__title">
                <div className="card-mobile__title--left">
                    <img src={logo} alt="logo" className="logo"/>
                    <h1>{ title }</h1>
                </div>
                <button onClick={() => handleClick()}><img src={ Arrow } alt="right-arrow" className={ showMore ? "rotate" : "rotateBack"} /></button>
            </div>
            <div className="card-mobile__image"><img src={ img } alt="img"/></div>
            <p className="card-mobile__description">{ showMore ? description : `${description.substring(0,212)}`}</p>
        </div>
    )
}

export default CardMobile;