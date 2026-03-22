import React, { useState } from 'react'

const A_TodoPageObjects = () => {
    const [person,setPerson] = useState({
        name : "Shikhil",
        age : 29
    });

    const handleIncreaseAge = () => {
      // person.age + 1;    // Should not update like this, It mutates the original object, so React may not detect the change.

      const newPerson = { ...person, age: person.age + 1 }; // To update age in UI that coming from object, we should create new object and state what operation we want to perform on the particular property of an object
      setPerson(newPerson);
    }

    const handleDecreaseAge = () => {
        const newPerson = { ...person, age: person.age - 1 };
        setPerson(newPerson);
    };

    // NOTE : We should always update state variable with new object (creating copy of it), rather than mutating previous state object directly (i.e. should not mutate original object although react does not even supports that)

  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>

      <button onClick={handleIncreaseAge} >Increase age</button>
      <button onClick={handleDecreaseAge} >Decrease age</button>
    </div>
  );
}

export default A_TodoPageObjects;