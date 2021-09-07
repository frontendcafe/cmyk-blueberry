import "./styles.scss";

export const Button = (props) => {
  return <button className={props.variant}>{props.text}</button>;
};

export default Button;
