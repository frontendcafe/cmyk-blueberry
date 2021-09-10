import React from 'react';
import "./style.scss";
import imagen from '../../assets/imagen-portada-2.png';


function Main() {
        return ( 
            <div className = "container">
                <div className="texto">
                    <h1>
                       <span className = "texto-simple">
                            <span>
                                Tu imaginación<br/>
                            </span>
                            <span className = "texto__alineado__derecha">
                               no tiene limites,<br/>
                            </span>
                        </span> 
                        <span className = "texto__cursiva">
                         la nuestra tampoco... <br/>
                        </span>
                    </h1>
                    <button>
                        <a href="#">Más información</a>
                    </button>
                </div>
                <div className = "img-container">
                    <img src={imagen} className = "img__circular" alt="imagen de una copa de vino"/>
                    <img src={imagen} className = "img__rectangular" alt="imagen de una copa de vino"/>
                </div>
            </div> );
}
 
export default Main;