import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div>
        <label htmlFor="value">value to push: </label>
        <input type="text" id="value" />
      </div>
      <div>
        <button>push to stack</button>
        <button>pop from stack</button>
      </div>
    </div>
  );
}

export default App;
