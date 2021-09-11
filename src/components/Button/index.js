import "./styles.scss";

export const Button = (props) => {
  return (
    <button
      className={`button${props.variant ? ` button--${props.variant}` : ""}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
