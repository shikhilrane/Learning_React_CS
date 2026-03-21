
import React, { useState } from "react";

const Counter4 = () => {
  const [num, setNum] = useState(0);

  // 1. Async function with Updater function
  const incrementNumAsyncWithUpdaterFunc = async () => {
    setNum((prevNum) => prevNum + 1);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    setNum((prevNum) => prevNum - 1);

    console.log("num with updater function : " + num);
  };

  // 2. Async function without Updater function
  const incrementNumAsyncWithoutUpdaterFunc = async () => {
    setNum(num + 1);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    setNum(num - 1);

    console.log("num without updater function : " + num);
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={incrementNumAsyncWithUpdaterFunc}>Increase Counter Async with updater function</button>
      <button onClick={incrementNumAsyncWithoutUpdaterFunc}>Increase Counter with Async without updater function</button>
    </div>
  );
}

export default Counter4

/*
    1. Async function with Updater function
        The updater function always uses the latest state value,
        even after an await pause. So the increment happens first,
        and after the promise resolves the decrement uses the
        latest updated value correctly.

    2. Async function without Updater function
        setNum(num + 1) and setNum(num - 1) both use the same
        state snapshot from when the function started.
        Because of this, the second update does not see the
        updated state and may produce an unexpected result.
*/