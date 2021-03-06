import React from 'react';
import Button from '../Button';
import './styles.scss'; 

const CardOurWinesMobile = ({title, img, background}) => {

    return (
        <section className={`cardWineMobile cardWineMobile--${background}`}>
            <div className="cardWineMobile__container">
                <img className="cardWineMobile__container-img"src={img} alt="Imagen de vino"/>
                <div className="cardWineMobile__container-text">
                    <h2>{title.substring (0, title.indexOf("-")-1)}</h2>
                    <h3>{title.substring(title.indexOf("-")+1, title.length)}</h3>
                </div>   
            </div>                
            <Button variant="secondary" text="Más información" clases="cardWineMobile__button" />
        </section>
    )
}

export default CardOurWinesMobile;
