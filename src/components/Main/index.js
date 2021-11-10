import React from "react";
import "./style.scss";
import imagen from "../../assets/portada.png";
import Button from "../Button";
import { useHistory } from 'react-router';


function Main() {
  const history = useHistory();

  const handleClick = () => {
      history.push("/lo-nuevo")
  }

  return (
    <main className="main">
      <div className="main__texto">
        <h1>
          <span className="main__texto--simple">
            <span>
              Tu imaginación
              <br />
            </span>
            <span className="main__texto--derecha">
              no tiene limites,
              <br />
            </span>
          </span>
          <span className="main__texto--cursiva">
            la nuestra tampoco... <br />
          </span>
        </h1>
        <Button variant="primary" text="Conocé lo nuevo" onClick={handleClick} />
      </div>
      <div className="main__img">
        <img
          src={imagen}
          className="main__img--circular"
          alt="imagen de una copa de vino"
        />
        <img
          src={imagen}
          className="main__img--rectangular"
          alt="imagen de una copa de vino"
        />
      </div>
    </main>
  );
}

export default Main;
