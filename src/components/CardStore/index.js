import "./styles.scss";
import grapeVector from "../../assets/grapeVector.svg";
import homeVector from "../../assets/homeVector.svg";
import heartVector from "../../assets/heartVector.svg";

const CardStore = ({ variant, title, body }) => {
  return (
    <div className={`card  card--${variant}`}>
      <div className={`card__container`}>
        <div className="vector">
          <img
            alt=""
            className="vector__element"
            src={variant === "transparent" ? grapeVector : homeVector}
          ></img>
          <img
            alt=""
            className="vector__heart"
            src={variant === "transparent" ? "" : heartVector}
          ></img>
        </div>
        <div className={`title title--${variant}`}>
          <h3 className="title__text">{title}</h3>
        </div>
        <div className={`body body--${variant}`}>
          <p className="body__text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStore;
