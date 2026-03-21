import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const[count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

  return (
    <div>
        <p>Inside Parent : {count}</p>
        <button onClick={handleClick} >Parent Buttom</button>
        <Child count={count}/>
    </div>
  )
}

export default Parent

/*
    Parent → Child Data Passing (Props)

        1. The Parent component has the state (count).

        2. Parent passes data to Child using props.
           <Child count={count} />

        3. Here "count" is a prop.
           It sends the value of parent's state to the Child component.

        4. The Child component receives it as props.
           const Child = (props) => { }

        5. Child can access the value using : props.count

        6. Whenever the Parent state changes,
           React re-renders both Parent and Child, and Child receives the updated value.

    Summary:
    Parent state → passed as props → Child receives and displays it.
*/