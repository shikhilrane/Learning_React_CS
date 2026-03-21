import React from 'react'

// 1.3 Passed prop
// 3.3 Passed in handler 'e' to stopPropagation
const ChildA = (props) => {
    const steps = 5;
    return (
        <button onClick={(e) => props.handler(steps, e)}>Click Me A</button>
    )
};

// 2.3
const ChildB = (props) => {
    return(
        <button onClick={(e) => props.handler()}>Click Me B</button>
    )
};

const Event2 = () => {
    // 1.1 Passing steps that will be filled by ChildA , whose parameter will be passed by ChildA 
    // 3.2 Passed 'e' to stopPropagation
    const walking = (steps, e) => {
        alert("Going for walk, steps: " + steps);
        e.stopPropagation();
    }

    // 2.1 
    const eating = () => {
      alert("Eating");
    };

  return (
    // 3.1 Passed onClick() function to check propagation
    <div onClick={() => alert("Clicked from parent")}>
        {/* 1.2 Made any random prop as handler and passed walking function and this function will execute by ChildA */}
        <ChildA handler={walking} />

        {/* 2.2 */}
        <ChildB handler={eating} />
    </div>
  )
}

export default Event2


/*
    1.1 -> Created a function with parameter
    1.2 -> Passed a child component (ChildA) in this component
    1.3 -> ChildA will pass the number of steps throguh props
*/ 