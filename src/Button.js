import "./Button.css";
const Button = ({text, actionOnClick}) => {
  return (
    <button onClick={actionOnClick} className="button" > {text} </button>
  )
}

export default Button;