import React from 'react';
import Button from '../Button';
//import img from '../../assets/'

const CardOurWines = ({title, img, background}) => {
    return (
        <section className={`card card--${background}`}>
            <div className="card__container">
                <h2>{title}</h2>
                <img src={img} alt="Imagen de vino"/>
            </div>                
            <Button variant="secondary" text="Más información"></Button>
        </section>
    )
}

export default CardOurWines;
