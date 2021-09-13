import React from 'react';
import "./styles.scss";
import colorIcon from '../../assets/color-icon.svg';
import aromaIcon from '../../assets/aroma-icon.svg';
import saborIcon from '../../assets/sabor-icon.svg';
import prensa from '../../assets/prensa.png'

//PRUEBA
import vino from '../../assets/wine-mattwe.png';


const WineDetail = () => {
    return (
        <section className="detail">
            <div className="detail__img">
                <img src={vino} alt="vino"/>                                                
            </div>
            <section className="detail__section first">
                <h1 className="detail__section-title detail__section-title--primary ">MATTWE CABERNET 2010</h1>
                <p className="detail__section-text">Creamos una línea de vinos únicos y elegantes, en donde cada uno es fruto del trabajo en un viñedo especial, por su edad y su manejo. Elaborado con uvas provenientes de nuestros viñedos centenarios plantados en 1906 y 1930.</p>
            </section>
            <section className="detail__section second">
                <h2 className="detail__section-title detail__section-title--secondary">COMPOSICION VARIETAL</h2>
                <p className="detail__section-text">Malbec (Gualtallary) 56%, Cabernet Sauvignon (Gualtallary) 12.5% y Cabernet Sauvignon (Perdriel, Luján de Cuyo) 31.5%.</p>
            </section>
                
            <section className="detail__section third">
                <h2 className="detail__section-title detail__section-title--secondary">NOTAS DE CATA</h2>
                <div className="detail__section-item">
                    <img src={colorIcon} alt="Icon color"></img>
                    <h3>Color:</h3>
                    <p>Rojos con reflejos bordo</p>
                </div>
                <div className="detail__section-item">
                    <img src={aromaIcon} alt="Icon aroma"></img>
                    <h3>Aroma:</h3>
                    <p>Predominan los aromas de frutos rojos maduros y mermeladas, combinados con el suave aporte aromático del roble, vainilla chocolate y algunos ahumados.</p>
                </div>
                <div className="detail__section-item">
                    <img src={saborIcon} alt="Icon sabor"></img>
                    <h3>Sabor:</h3>
                    <p>Boca elegante en la que se vuelve imperceptible el paso por madera.</p>
                </div>
            </section>
            <section className="detail__section fourth">
                <h2 className="detail__section-title detail__section-title--secondary">MARIDAJE SUGERIDO</h2>
                <p className="detail__section-text">Acompaña muy bien carnes rojas a la parrilla, quesos duros y pastas con salsas blancas así como de tomate o trufas. También es ideal para platos principales, como guisos y carnes de caza o verduras, como papas rellenas, cabutia al horno y pimientos.</p>
            </section>
            <section className="detail__section fifth">
                <button className="detail__section-button">Volver</button>
                <img className="detail__section-img" src={prensa} alt="Prensa de uvas azul"/>
            </section>
        </section>
    )
}

export default WineDetail;