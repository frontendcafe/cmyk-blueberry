import "./styles.scss";

export const Button = (props) => {
  return <button id={props.variant}>{props.text}</button>;
};

export default Button;
