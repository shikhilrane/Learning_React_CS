import React, { useState } from 'react'
import Counter from './Counter'

const StatesIntro = () => {

   const [show,setShow] = useState(true);

   const showSetter = () => {
        setShow(!show);
   }

  return (
    <div>
      {show && <Counter />}
      <button onClick={showSetter}>Toggle</button>
    </div>
  );
}

export default StatesIntro

/*
    1. if show is true then component will be visible and will stay in dom, so tracked by
    2. if show is false(by clicking on it) then component will get removed from dom and won't be tracked by dom
*/