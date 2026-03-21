
import React, { useState } from "react";

const Counter1 = () => {
    const [num,setNum] = useState(0);

    let x = 0;
    
    const incrementNum = () => {
        setNum(num + 1);
        setNum(num + 1);
        setNum(num + 1);
        setNum(num + 1);
        setNum(num + 1);
        console.log("num : " + num);
        
        x++;
        console.log("x : " + x);
    };
    
  return (
    <div>
      <p>{num}</p>
      <button onClick={incrementNum}>Increase Counter</button>
    </div>
  );
}

export default Counter1

/*
    1. Value of x will remains the same in UI because x is a normal variable. 
       React re-render ke baad ye dobara 0 se initialize ho jata hai.
       React normal variables ko track nahi karta.
    2. Value of num will changes in the UI because num React state hai (useState). 
       Jab setNum call hota hai to React component ko re-render karta hai aur updated value UI me show hoti hai.
*/