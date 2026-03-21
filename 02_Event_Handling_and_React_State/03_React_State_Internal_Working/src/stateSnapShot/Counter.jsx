
import React, { useState } from 'react'

const Counter = () => {
    const [num,setNum] = useState(0);

    const incrementNum = () => {
      setNum(num + 1); // ----------|
      setNum(num + 1); //           |
      setNum(num + 1); //           |----------> it won't update immediately when all methods called. so in result we can see coutner incremented
      setNum(num + 1); //           |             by 1. This is called batch updates
      setNum(num + 1); // ----------|             This last function called will be applied. If, setNum(num + 2); then it will be rendered
      console.log(num);
    };

    const decrementNum = () => {
      setNum(num - 1);
    }; 

  return (
    <div>
      <p>{num}</p>
      <button onClick={incrementNum}>Increase Counter</button>
    </div>
  );
}

export default Counter

// Updation won't happen in this component