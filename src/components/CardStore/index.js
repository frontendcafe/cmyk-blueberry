import "./styles.scss";
import grapeVector from "../../assets/img/grapeVector.svg";
import homeVector from "../../assets/img/homeVector.svg";

const CardStore = ({ isTransparent, title, body }) => {
  return (
    <div className="card">
      <div className={`rectangle ${isTransparent ? "transparent-card" : "color-card"}`}>
        <div className="div-vector">
          <img
            alt=""
            className="vector"
            src={isTransparent ? grapeVector : homeVector}
          ></img>
        </div>
        <div className="title-div">
          <h3 className={` h3 ${isTransparent ? "transparent" : "color"}`}>{title}</h3>
        </div>
        <div className="body-div">
          <p className={isTransparent ? "transparent" : "color"}>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStore;
