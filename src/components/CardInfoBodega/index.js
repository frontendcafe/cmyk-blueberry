import React from "react";
import "./styles.scss";
import Wsp from "../../assets/wsp.png";

const CardInfoBodega = () => {
    return (
        <div className="card">
            <h2 className="card__title">BODEGA</h2>
            <p className="card__address">San Martín 1745, Lujan de Cuyo, Mendoza, Argentina.</p>
            <p className="card__email">info@wineberry.com.ar</p>
            <div className="card__wsp">
                <img src={Wsp} alt="whatsapp icon" />
                <p>(+54 9)1158496231</p>
            </div>
        </div>
    )
};

export default CardInfoBodega;
