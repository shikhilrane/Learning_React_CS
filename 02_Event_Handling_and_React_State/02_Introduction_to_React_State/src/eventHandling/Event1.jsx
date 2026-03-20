import React from 'react'

const Event1 = () => {
  const handleClick = (e) => {
    console.log(e);
    alert("I was clicked");
  };

  const handleMouseMove = (e) => {
    console.log(e);
    console.log("Hovered on Event");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); // It is used to not redirect to another page after submitting form
    console.log("Form was submitted", e);
  };

  const handleUsernameChanged = (e) => {
    const username = e.target.value; // target the letters when we are typing username
    console.log(username);
  };

  return (
    <>
      {/* onClick = When we click on Click Me button, event obj will be get and alert should be shown, and 
          onMouseMove = When we hover on Click Me button, event obj will be get and log should be shown on log */}
      {/* <button onClick={handleClick} onMouseMove={handleMouseMove}>
        Click Me
      </button> */}

      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="Username"
          onChange={handleUsernameChanged}
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button>Submit</button>
      </form>
    </>
  );
}

export default Event1