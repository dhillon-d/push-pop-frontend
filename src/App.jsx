import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const handleInputClick = () => {
    setInputValue(inputRef.current.value);
  };
  const handleOutputClick = () => {
    setOutputValue(inputValue);
  };

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div>
        <label htmlFor="value">value to push: </label>
        <input ref={inputRef} type="text" id="value" name="value" />
        <p>popped value: {outputValue}</p>
      </div>
      <div>
        <button onClick={handleInputClick}>push to stack</button>
        <button onClick={handleOutputClick}>pop from stack</button>
      </div>
    </div>
  );
}

export default App;
