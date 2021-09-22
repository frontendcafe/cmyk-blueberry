import "./styles.scss";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button button--${props.variant} ${props.clases}`} >
      {props.text}
    </button>
  );
};

export default Button;
