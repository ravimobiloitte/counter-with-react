import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addvalue = () => {
    if (counter == 20) {
    } else {
      setCounter(counter + 1);
    }

    console.log("clicked value", counter);
  };
  const removevalue = () => {
    if (counter == 0) {
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Number Counter {counter}</h1>
      <h4>Current Number = {counter}</h4>
      <br />
      <button className="button1" onClick={addvalue}>
        Increase {counter}
      </button>
      <button onClick={removevalue}>Decrease</button>
    </>
  );
}

export default App;
