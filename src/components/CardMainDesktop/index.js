import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router';
import { card } from './data';
import image from '../../assets/imagen-card-main.png';
import Button from "../Button";

const CardMainDesktop = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/home")
    }

    return (
        <div className="card-main">
            <div className="card-main__container">
                <div className="card-main__container__image">
                    <img src={image} alt="Imagen vino vindano" />
                </div>

                <div className="top-text">
                    <h1>{ card.title }</h1>
                    <p>{ card.description } <span>{ card.descBold }</span></p>
                </div>

                <div className="card-main__container__grid">
                    <div grid-area="box1"></div>
                    <div grid-area="box2"></div>
                    <article grid-area="p1">
                        <h2>{card.paragraphs[0].title}</h2>
                        <p>{card.paragraphs[0].description}</p>
                    </article>
                    <div grid-area="box3"></div>
                    <div grid-area="box4"></div>
                    <article grid-area="p2">
                        <h2>{card.paragraphs[1].title}</h2>
                        <p>{card.paragraphs[1].description}</p>
                    </article>
                    <div grid-area="box5"></div>
                    <div grid-area="box6"></div>
                    <article grid-area="p3">
                        <h2>{card.paragraphs[2].title}</h2>
                        <p>{card.paragraphs[2].description}</p>
                    </article>
                    
                    
                    
                </div>

                <div className="bottom-text">
                    <p>Uno de los problemas es que beber vino de arándano puede llegar a convertirse en adictivo con el tiempo. Los amantes de este vino, por lo tanto, tienen que aprender a <span>consumirlo con moderación</span>. Para conservarlo una vez abierto, lo mejor es volverlo a tapar con el corcho y asegurarse de que no queda expuesto al aire.</p>
                </div>

                <Button variant="secondary" text="Volver" clases='card-container__button' onClick={handleClick}></Button>
            </div>
        </div>
    )
}

export default CardMainDesktop;