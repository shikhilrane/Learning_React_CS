import React, { useState } from 'react'

const Counter = () => {

    let [counter, setCounter] = useState(0);

    let incrementCounter = () => {
        setCounter(counter+1);
    }

    let decrementCounter = () => {
      setCounter(counter - 1);
    };

  return (
    <div>
      <p>Number of counts : {counter}</p>
      {counter<20 && <button onClick={incrementCounter}>Click to increase counts </button>}
      {counter>0 && <button onClick={decrementCounter}>Click to decrease counts </button>}
    </div>
  );
}

export default Counter

/*
    1. React does not track normal variables. It only tracks state and props.
    2. In React, state is stored and managed internally by React for each component instance.
        When a component unmounts (removed from JSX / DOM), React destroys that component instance.
        When that happens, its state is also discarded. (See StateIntro.jsx)
*/