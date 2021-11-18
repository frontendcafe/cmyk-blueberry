import React from 'react';
import Button from '../Button';
import './styles.scss'; 

const CardOurWinesDesktop = ({title, img, background, info}) => {

    return (
        <section className={`cardWine cardWine--${background}`}>
            <img className="cardWine-img"src={img} alt="Imagen de vino"/>
            <div className="cardWine__container">
                <div className="cardWine__container-text"> 
                    <h2>{title.substring (0, title.indexOf("-")-1)}</h2>
                    <h3>{title.substring(title.indexOf("-")+1, title.length)}</h3>
                </div>
                <p className="cardWine__container-info">{info}</p>
                <Button variant="secondary" text="Quiero saber más" clases="cardWine__container-button" />
            </div>   
        </section>
    )
}
export default CardOurWinesDesktop;