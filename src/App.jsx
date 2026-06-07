import { useEffect, useState } from "react";
import init, { calculate } from "./wasm_calc/wasm_calc.js";

import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "./App.css";

function App() {
  const [ready, setReady] = useState(false);
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    init().then(() => {
      setReady(true);
    });
  }, []);

  function handleCalculate(operator) {
    const a = number1 ?? 0;
    const b = number2 ?? 0;

    try {
      const value = calculate(a, b, operator);
      setResult(String(value));
    } catch (error) {
      setResult(error.toString());
    }
  }

  if (!ready) {
    return <h2>Loading WebAssembly...</h2>;
  }

  return (
    <div className="page">
      <Card title="Rust WASM Calculator" className="calculator-card">
        <div className="form-row">
          <label htmlFor="number1">Nr. 1</label>
          <InputNumber
            id="number1"
            value={number1}
            onValueChange={(e) => setNumber1(e.value)}
            useGrouping={false}
            className="input-field"
          />
        </div>

        <div className="form-row">
          <label htmlFor="number2">Nr. 2</label>
          <InputNumber
            id="number2"
            value={number2}
            onValueChange={(e) => setNumber2(e.value)}
            useGrouping={false}
            className="input-field"
          />
        </div>

        <div className="form-row">
          <label htmlFor="result">Result</label>
          <InputText
            id="result"
            value={result}
            readOnly
            className="input-field"
          />
        </div>

        <div className="button-row">
          <Button label="+" onClick={() => handleCalculate("+")} />
          <Button label="-" onClick={() => handleCalculate("-")} />
          <Button label="*" onClick={() => handleCalculate("*")} />
          <Button label="/" onClick={() => handleCalculate("/")} />
        </div>
      </Card>
    </div>
  );
}

export default App;