
import React, { useState } from "react";

const Counter3 = () => {
  const [num, setNum] = useState(0);

  // Updater function
  const incrementNum = () => {
    setNum((prevNum) => prevNum + 1); // it updates the previous num with +1 so, 0+1 = 1
    setNum((prevNum) => prevNum + 1); // again it updates the previous num with +1 so, 1+1 = 2
    setNum((prevNum) => prevNum + 1); // again it updates the previous num with +1 so, 2+1 = 2
    setNum((prevNum) => prevNum + 1); // again it updates the previous num with +1 so, 3+1 = 3
    setNum((prevNum) => prevNum + 1); // again it updates the previous num with +1 so, 4+1 = 4
    console.log(num);
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={incrementNum}>Increase Counter</button>
    </div>
  );
}

export default Counter3

/*
    Updater function
        setNum(prevNum => prevNum + 1) uses the previous state value.
        Each update receives the latest updated value from React’s queue.
        So calling it 5 times results in: 0 → 1 → 2 → 3 → 4 → 5.
        It will only take 1 render to update component
*/