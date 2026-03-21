import { useState } from "react";
import Child from "./ChildCtoP";

const ParentCtoP = () => {
  const [countParent, setCountParent] = useState(0);

  const handleDataFromChild = () => {
    setCountParent(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Inside Parent : {countParent}</p>
      <Child count={countParent} handleDataFromChild={handleDataFromChild} />
    </div>
  );
};

export default ParentCtoP;

/*
   Child → Parent Data Passing (Using Callback Function)

   1. The state (countParent) is stored in the Parent component.

   2. Parent creates a function (handleDataFromChild) that updates the state.
      const handleDataFromChild = () => {
         setCountParent(prevCount => prevCount + 1);
      };

   3. Parent passes two things to Child using props:
      - count (current state value)
      - handleDataFromChild (function)
      <Child count={countParent} handleDataFromChild={handleDataFromChild} />

   4. The Child component receives them through props.

   5. When the Child button is clicked,
      the child calls the parent's function : props.handleDataFromChild()

   6. This function updates the parent's state.

   7. When the parent state updates,
      React re-renders Parent and Child,
      and the updated value is shown in both.

   Summary:
   Parent state → function passed to Child → Child calls function → Parent state updates → UI updates.
*/