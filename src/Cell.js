const Cell = ({value}) => {
  const idValue = {id: value};
  return (
    <input key={idValue} value={value} readOnly /> 
  )
}

export default Cell; 