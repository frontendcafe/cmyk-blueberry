import React from 'react';
import "./style.scss";
import imagen from '../../assets/imagen-portada-2.png';
import Button from '../Button';


function Main() {
        return ( 
            <main className = "main">
                <div className="main__texto">
                    <h1>
                       <span className = "main__texto--simple">
                            <span>
                                Tu imaginación<br/>
                            </span>
                            <span className = "main__texto--alineado-derecha">
                               no tiene limites,<br/>
                            </span>
                        </span> 
                        <span className = "main__texto--texto-cursiva">
                         la nuestra tampoco... <br/>
                        </span>
                    </h1>
                        <a href="#">
                            <Button variant="primary" text="Conocé lo nuevo"></Button>
                        </a>
                </div>
                <div className = "main__img-container">
                    <img src={imagen} className = "main__img--circular" alt="imagen de una copa de vino"/>
                    <img src={imagen} className = "main__img--rectangular" alt="imagen de una copa de vino"/>
                </div>
            </main> );
}
 
export default Main;