import Button from "../components/Button";
import CardMobile from "../components/CardsMobile";
import CardDesktop from "../components/CardDesktop";
import data from "./data.json";
import { useWindow } from "../hooks";
import "./styles.scss";

export const Information = ({handleClick, moreInfo}) => {

  const size = useWindow();
  console.log(size);
  
  return (
    <section className={`information${moreInfo ? "--expanded" : ""}`}>
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
                children={moreInfo ? info.description : info.shortDesc}
                type ={info.type}
                moreInfo={moreInfo}
              />
            ))}
      </div>
      <div className="information__btn">
        <Button variant="blueborder" text="Más información" onClick={handleClick} />
      </div>
    </section>
  );
};

export default Information;