import CellValue from "./Cell";

const NumberList = ({list, operator}) => {
  return (
    list.map(element =>  <CellValue value={element} operator={operator}/>) 
  )
}

export default NumberList; 