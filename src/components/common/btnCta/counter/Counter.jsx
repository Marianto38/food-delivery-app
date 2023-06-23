import React from 'react'
import './stylesCounter.scss'
import { useState } from 'react';

const Counter = ({count, setCount}) => {

   // const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
      };
    
      const decrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      };
  return (
    <div>
         <div className='container__quantityCounter'>
          <button onClick={decrement} className='container__quantityCounter--decrement'>-</button>
          <p>{count}</p>
          <button onClick={increment} className='container__quantityCounter--increment'>+</button>
        </div>
    </div>
  )
}

export default Counter