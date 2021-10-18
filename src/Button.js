
const Button = (text, actionOnClick) => {
  return (
    <button onClick={actionOnClick} value={text}></button>
  )
}

export default Button;