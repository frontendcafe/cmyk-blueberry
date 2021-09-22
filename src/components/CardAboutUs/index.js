import React from 'react'
import {cards} from './data';
import './styles.scss'; 

function CardAboutUs() {
    return (
        {cards.map((card) => 
        <div className = "card-container">
            <img className = "card-container__image">
            </img>
            <div className = "card-container__box">
                <h1> {card.name} </h1>
                <h2> {card.role} </h2>
                <p> {card.mail} </p>
                <div className = "card-container__box--icons">
                    <a href = {card.links.linkedin}>
                        <img>
                        </img>
                    </a>
                    <a href = {card.links.github}>
                        <img>
                        </img>
                    </a>
                </div>
            </div>
        </div>
        )};
    );
}

export default CardAboutUs;