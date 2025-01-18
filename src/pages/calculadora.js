// calculadora.js
import { useState } from 'react';

export default function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <h1>Calculadora simples</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
        <button onClick={handleCalculate}>Calcular</button>
      </div>
      <h2>Resultado: {result}</h2>
    </div>
  );
}
