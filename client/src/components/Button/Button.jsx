import "./Button.css";

const Button = (props) => {
  return (
    <button className={`btn btn--${props.mod}`}>{props.text}</button>
  )
}

export default Button;
