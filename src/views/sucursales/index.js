import "./styles.scss";
import CardStore from "../../components/CardStore/index";
import { cards } from "./data";
import useScrollToHash from '../../hooks/scroll';

const Sucursales = () => {
  useScrollToHash();
  return (
    <div id="sucursales">
      <h1 id="sucursales__title">NUESTRAS SUCURSALES</h1>
      <div id="sucursales__cards">
        {cards.map((card, index) => 
        <CardStore
        variant={index % 2 === 0 ? "transparent" : "color"}
        title={card.title}
        body={card.description}
        key={index}
        />
        )}
      </div>
    </div>
  );
};


export default Sucursales;
