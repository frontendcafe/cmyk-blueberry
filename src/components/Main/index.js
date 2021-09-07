import React from 'react';
import "./style.scss";
import imagen from '../../assets/imagen-portada-2.png';


function Main() {
        return ( 
            <div className = "container">
                <div className="texto">
                    <h1>
                       <span className = "texto-simple">
                            <span className = "texto-simple1">
                                Tu imaginación<br/>
                            </span>
                            <span className = "texto-simple2">
                               no tiene limites,<br/>
                            </span>
                        </span> 
                        <span className = "texto-complejo">
                         la nuestra tampoco... <br/>
                        </span>
                    </h1>
                    <button>
                        <a href="#">Más información</a>
                    </button>
                </div>
                <div className = "img-container">
                    <img src={imagen} className = "imagen" alt="imagen de una copa de vino"/>
                    <img src={imagen} className = "imagen-1" alt="imagen de una copa de vino"/>
                </div>
            </div> );
}
 
export default Main;