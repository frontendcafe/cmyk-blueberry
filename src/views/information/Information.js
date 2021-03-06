import Button from "../../components/Button";
import CardMobile from "../../components/CardsMobile";
import CardDesktop from "../../components/CardDesktop";
import data from "./data.json";
import { useHistory } from "react-router";
import { useWindow } from "../../hooks/useWindow";
import "./styles.scss";

export const Information = () => {

  const size = useWindow();
  const history = useHistory();

  const handleClick = () => {
      history.push("/bodega-wineberry");
  };
  
  return (
    <section className={`information`}>
      <div className="information__cards">
        {size.width < 576
          ? data.map((info) => (
              <CardMobile
                key={info.id}
                logo={info.logo}
                img={info.img}
                title={info.title}
                description={info.description}
              />
            ))
          : data.map((info) => (
              <CardDesktop
                key={info.id}
                icon={info.logo}
                cover={info.deskImg}
                title={info.title}
                children={info.shortDesc}
                type ={info.type}
              />
            ))}
      </div>
      <div className="information__btn">
        <Button variant="blueborder" text="Más información" onClick={ handleClick } />
      </div>
    </section>
  );
};

export default Information;