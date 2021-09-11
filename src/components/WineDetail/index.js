import React from 'react';
import "./styles.scss";
import colorIcon from '../../assets/color-icon.svg';
import aromaIcon from '../../assets/aroma-icon.svg';
import saborIcon from '../../assets/sabor-icon.svg';
import prensa from '../../assets/prensa.png'


const WineDetail = () => {
    return (
        <article className="detail">
            <div className="detail__img">
                <img alt="vino"/>
            </div>
            <section className="detail__sectionPrincipal">
                <h1 className="detail__section-title"></h1>
                <p className="detail__section-text"></p>
            </section>
            <section className="detail__section">
                <h2 className="detail__section-title--color">COMPOSICION VARIETAL</h2>
                <p className="detail__section-text"></p>
            </section>
                
            <section className="detail__section">
                <h2 className="detail__section-title--color">NOTAS DE CATA</h2>
                <div>
                    <img src={colorIcon} alt="Icon color"></img>
                    <h3>Color</h3>
                    <p></p>
                </div>
                <div>
                    <img src={aromaIcon} alt="Icon aroma"></img>
                    <h3>Aroma</h3>
                    <p></p>
                </div>
                <div>
                    <img src={saborIcon} alt="Icon sabor"></img>
                    <h3>Sabor</h3>
                    <p></p>
                </div>
            </section>
            <section className="detail__section">
                <h2 className="detail__section-title--color">MARIDAJE SUGERIDO</h2>
                <p></p>
            </section>
            <section>
                <button>Volver</button>
                <img src={prensa} alt="Prensa de uvas azul"/>
            </section>
        </article>
    )
}

export default WineDetail;