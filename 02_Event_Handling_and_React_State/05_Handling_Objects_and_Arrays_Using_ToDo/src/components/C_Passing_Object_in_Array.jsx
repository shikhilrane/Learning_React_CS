import React, { useState } from "react";

const C_Passing_Object_in_Array = () => {
  const [todos, setTodos] = useState([]);
  
    const handleFormSubmit = (e) => {
      e.preventDefault(); // Because default behaviour of form refreshes the form in some browsers
  
      const todoText = e.target["todo"].value; // It will target the value "todo" in form (incoming text from form input)
      console.log(todoText);
  
      const newTodos = [...todos, {
        text : todoText,
        id : crypto.randomUUID()    // This way we can generate id for properties of objects
      }]; // We should create copy of original array and then push incoming text from form input
  
      setTodos(newTodos);
  
      e.target.reset(); // After submit form will get resetted
    };
  
    return (
      <div>
        <h1>Super Todo</h1>
  
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="todo" placeholder="Enter your todo here" />
          <button>Submit</button>
        </form>
  
        <div>
          {todos.map((item) => {
            return <li key={item.id}> {item.text}</li>; // every entry of form input will get printed after submitting on UI
          })}
        </div>
      </div>
    );
}

export default C_Passing_Object_in_Array