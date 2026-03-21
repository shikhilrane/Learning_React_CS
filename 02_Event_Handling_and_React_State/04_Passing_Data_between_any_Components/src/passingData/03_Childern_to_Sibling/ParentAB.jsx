
import { useState } from "react";
import ChildA from './ChildA';
import ChildB from "./ChildB";

const ParentAB = () => {
  const [countParent, setCountParent] = useState(0);

  const handleDataFromChild = () => {
    setCountParent((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Inside Parent : {countParent}</p>
      <ChildA count={countParent} handleDataFromChild={handleDataFromChild} />
      <ChildB data={countParent} />
    </div>
  );
}

export default ParentAB

/*
    Sibling Communication (ChildA → Parent → ChildB)

    1. The state (countParent) is stored in the Parent component.

    2. Parent creates a function to update the state.
    const handleDataFromChild = () => {
        setCountParent(prevCount => prevCount + 1);
    };

    3. Parent passes:
    - count to ChildA
    - handleDataFromChild function to ChildA
    - data to ChildB

    4. ChildA receives the function and calls it when the button is clicked.
    props.handleDataFromChild()

    5. When ChildA calls this function,
    the Parent state (countParent) updates.

    6. When the Parent state updates,
    React re-renders the Parent and all its children.

    7. ChildB receives the updated value through props and displays the new count.

    Summary flow:

    ChildA button click
            ↓
    ChildA calls parent function
            ↓
    Parent state updates
            ↓
    Parent re-renders
            ↓
    Updated value goes to ChildB via props
*/