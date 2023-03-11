import "./App.css";
import { useState, useRef } from "react";
import axios from "axios";

function App() {
  const inputRef = useRef(null);
  const [outputValue, setOutputValue] = useState("");
  const handleInputClick = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/push",
      data: {
        value: inputRef.current.value,
      },
    });
  };
  const handleOutputClick = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/pop",
    })
      .then(function (response) {
        setOutputValue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
