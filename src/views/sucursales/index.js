import "./styles.scss";
import CardStore from "../../components/CardStore/index";
import { cards } from "./data";

const Sucursales = () => {
  return (
    <div id="sucursales">
      <h1 id="sucursales__title">NUESTRAS SUCURSALES</h1>
      <div id="sucursales__cards">
        <CardStore
          variant="transparent"
          title={cards[0].title}
          body={cards[0].description}
        ></CardStore>
        <CardStore
          variant="color"
          title={cards[1].title}
          body={cards[1].description}
        ></CardStore>
      </div>
    </div>
  );
};

export default Sucursales;
