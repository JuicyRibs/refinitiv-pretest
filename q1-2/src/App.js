import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [calc, setCalc] = useState('isPrime');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (value < 0) setValue(1);
    else setValue(Math.round(value));
  }, [value]);

  useEffect(() => {
    if (calc === 'isPrime') {
      setResult(isPrime(value) ? 'yes' : 'no');
    } else {
      setResult(isFibonacci(value) ? 'yes' : 'no');
    }
  }, [value, calc]);

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  const isFibonacci = (num, count = 1, last = 0) => {
    if (count < num) {
      return isFibonacci(num, count + last, count);
    }
    if (count === num) {
      return true;
    }
    return false;
  };

  return (
    <div className='App'>
      <div className='columns'>
        <div>
          <input
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}></input>
        </div>
        <div>
          <select value={calc} onChange={(e) => setCalc(e.target.value)}>
            <option value={'isPrime'}>isPrime</option>
            <option value={'isFibonacci'}>isFibonacci</option>
          </select>
        </div>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
