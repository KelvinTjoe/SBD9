import { useState, useEffect } from 'react'
import Navbar  from './Navbar';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
      <div className="bg-gray-100 ">
        <Navbar />
        <Card />
        <div className="container flex flex-col items-center justify-center h-screen mx-auto p-5">
          <h1 className="text-3xl font-bold mb-4">Counter App</h1>
          <span className="text-5xl font-bold">{count}</span>
          <div className="flex items-center space-x-10 mt-5">
            <button onClick={decrement} className="bg-blue-300 text-black text-lg font-bold px-4 py-2 rounded">-</button>
            <button onClick={reset} className="bg-blue-300 text-black text-lg font-bold px-4 py-2 rounded">Reset</button>
            <button onClick={increment} className="bg-blue-300 text-black text-lg font-bold px-4 py-2 rounded">+</button>
          </div> 
        </div>
      </div>
  )
}

export default App
