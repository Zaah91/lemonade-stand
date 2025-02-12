import { useEffect, useState } from "react";
import duck from './assets/f_20231010155051.webp'
import './App.css'

function Counter() {
  const [count, setCount] = useState(
    Number(localStorage.getItem('counter')) || 0
  )

  useEffect(() => { localStorage.setItem('counter', count) }, [count])

  return (
    <>
      <div>
        <img src={duck} className="logo" alt="duck logo" />
      </div>
      <h1>The lemonade stand</h1>
      <div className="card">
        <p>{count}$</p>
      </div>
    <button id='countButton' onClick={() => setCount(count + 5)}>
        Sell lemonade
    </button>
    <button id='countButton' onClick={() => setCount(count - 2)}>
        Buy lemons
    </button>
    </>
  )
}

export default Counter