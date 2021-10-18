import {useState} from "react";
import './App.css';
import Button from "./Button.js";
import NumberList from "./NumberList.js";
import Cell from "./Cell.js";

function App() {
  const [list, setList] = useState([1,2,3,4,5]);

  const increment = () => {
    if (list[4] < 20) {
      setList(list.map(number => number + 1));
    }
  }

  const decrement = () => {
    if (list[0] > 0) {
    setList(list.map(number => number -1));
    }
  }

  return (
    <>
      <Button text={"<<"} actionOnClick={decrement}/>
      <NumberList list={list} />
      <Button text={">>"} actionOnClick={increment}/>
    </>
  );
}

export default App;
