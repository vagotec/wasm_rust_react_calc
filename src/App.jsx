import { useEffect, useState } from "react";
import init, { calculate } from "./wasm_calc/wasm_calc.js";
import "./App.css";

function App() {
  const [ready, setReady] = useState(false);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    init().then(() => {
      setReady(true);
    });
  }, []);

  function handleCalculate(operator) {
    const a = Number(number1);
    const b = Number(number2);

    try {
      const value = calculate(a, b, operator);
      setResult(value);
    } catch (error) {
      setResult(error.toString());
    }
  }

  if (!ready) {
    return <h2>Loading WebAssembly...</h2>;
  }

  return (
    <div className="container">
      <h1>Rust WASM Calculator</h1>

      <div className="row">
        <label>Nr. 1</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>

      <div className="row">
        <label>Nr. 2</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>

      <div className="row">
        <label>Result</label>
        <input
          type="text"
          value={result}
          readOnly
        />
      </div>

      <div className="buttons">
        <button onClick={() => handleCalculate("+")}>
          +
        </button>

        <button onClick={() => handleCalculate("-")}>
          -
        </button>

        <button onClick={() => handleCalculate("*")}>
          *
        </button>

        <button onClick={() => handleCalculate("/")}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;