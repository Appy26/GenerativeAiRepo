import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    const handleIncrement = () => {
        setCounter(prev=>prev+1)
    }
    const handleDecrement = () => {
        setCounter(prev=>prev-1)
    }
    const handleReset = () => {
        setCounter(0)
        console.log(counter);
    }
  return (
      <div>
          <h1>Counter App</h1>
          <h2>Current Value :-  {counter}</h2>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
      </div>
  )
}

export default Counter