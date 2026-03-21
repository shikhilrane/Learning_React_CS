
import React, { useState } from "react";

const Counter2 = () => {
    const [num,setNum] = useState(0);
    
    const incrementNum = async () => {
      setNum(num + 1); // React triggers a render here because the next statement has await, so this update is processed before the async pause.

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      setNum(num - 1); // After the await finishes, React processes this update and triggers another render using the previos step's state snapshot.

      console.log("num : " + num);
    };
    
  return (
    <div>
      <p>{num}</p>
      <button onClick={incrementNum}>Increase Counter</button>
    </div>
  );
}

export default Counter2

/*
    1. setNum(num + 1) → React first render trigger karega.

    2. await aane se function pause ho jata hai.

    3. Promise resolve hone ke baad setNum(num - 1) call hota hai
    jo second render trigger karta hai.

    4. num ki value snapshot hoti hai (initial render ki),
    isliye second update 0 - 1 = -1 ho jata hai.
*/