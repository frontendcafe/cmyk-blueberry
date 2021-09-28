import Button from "../../components/Button";
import Sucursales from "../sucursales";
import CardMobile from "../../components/CardsMobile";
import CardDesktop from "../../components/CardDesktop";
import data from "../information/data.json";
import { useHistory } from "react-router";
import { useWindow } from "../../hooks/useWindow";
import "./styles.scss";

export const BodegaWineberry = () => {

const size = useWindow();
const history = useHistory();

const handleClick = () => {
    history.push("/home");
};

return (
    <div className="bodega">
        <section className={`information--expanded`}>
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
                    children={info.description}
                    type ={info.type}
                    moreInfo={true}
                />
                ))}
            </div>
        </section>
        <Sucursales />
        <div className="bodega__btn">
            <Button variant="transparent" text="Volver" className="card-container__button" onClick={handleClick}></Button>
        </div>
    </div>
    );
};

export default BodegaWineberry;