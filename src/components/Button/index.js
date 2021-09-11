import "./styles.scss";

export const Button = (props) => {
  return (
    <button
      className={`button button--${props.variant}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
