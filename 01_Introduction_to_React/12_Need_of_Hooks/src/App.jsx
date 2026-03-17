import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);

  // let counter = 5;

  function addValue() {
    if (counter >= 20) {
      return;
    }
    setCounter(counter += 1);
    console.log("Clicked to increase counter ", counter);
  }

  function removeValue() {
    if (counter <= 0) {
      return;
    }
    setCounter(counter -= 1);
    console.log("Clicked to decrease counter ", counter);
  }
  return (

    <>
      <h1>Hi</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue} >Remove value {counter}</button>

      <p>Footer : {counter}</p>
    </>
  );
}

export default App


/*
  ***************************************************** Before Using Hooks *****************************************************
    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'

    function App() {

      counter = 0 ()                                                           1.

      function addValue() {                                                    4.
        console.log("Clicked", counter)
        counter = counter + 1;
      }

      return (
        <>
          <h1>Hello</h1>                                                       2.
          <h2>Counter Value : {counter}</h2>                                   2.

          {<button onClick={addValue}>Add Value {counter}</button>}            3.
          <br />
          <button>Remove Value {counter}</button>                              5.
          <p>Footer : {counter}</p>                                            5.
        </>
      )
    }

export default App


  Understanding : 
    1. Made a variable
    2. (In return()) Made a tag h1 for greetings "hello" and h2 for Counter count and passed variable in it using {} as we saw in last chapter
    3. (In return()) Made a Add Value button and targetted it with onClick{} 
    4. (In App()) Made addValue() method, which increases the count by 1 and print the number of count on console & passed it in onClick{}.
    5. (In return()) created two tags button for remove and p as a footer and passed value for counter
        NOW NOTE THAT : 1. As we are clicking on button Add Value then values in console are changes but not on UI
                        For that thing react comes into picture, it will allow what changes to bring on UI and what not
                        React uses hooks to update changes on UI
                        "REACT CONTROLS THE UI UPDATION"
                        To check Hooks : Go to github of react => packages => react => src => ReactHooks.js
    Babel transforms JSX (including fragments) into React function calls.
    React renders those elements into the webpage’s DOM.
*/

/*
  ***************************************************** After Using Hooks *****************************************************
    import { useState } from 'react'                                                                      1. 
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'

    function App() {

      let [counter, setCounter] = useState(0)                                                             2.

      function addValue() {
        if (counter>=20) {                                                                                4.
          return;
        }
        console.log("Clicked to increase counter ", counter)
        setCounter(counter + 1)                                                                           3. 
      }

      function removeValue() {
        if (counter<=0) {                                                                                 4.
          return;
        }
        console.log("Clicked to decrease counter ", counter)
        setCounter(counter - 1)                                                                           3.
      }

      return (
        <>
          <h1>Hello</h1>
          <h2>Counter Value : {counter}</h2>

          <button onClick={addValue}>Add Value {counter}</button>
          <br />
          <button onClick={removeValue}>Remove Value {counter}</button>
          <p>Footer : {counter}</p>
        </>

      )
    }

    export default App


    Understanding : 
    Hooks = Inbuilt functions of React
    Jo aapko React ke important features (state, lifecycle, etc.) ko use karne dete hain, bina class component banaye.
      1. Importing a hook to use it 
          import { useState, useEffect } from 'react'  we can use multiple hooks like this
      2. useState is a hook use to change state on UI, and this change is propagated to UI/DOM
          useState() => this is how we can use hook (we can pass anything inside of () like boolean, String, Array, Object, Function)
          useState(0) => So as we are putting 0 as value of counter so we passed 0
          let [] = useState(0) => from useState, we always get two states, so have to store value of useState(0) in array
          let [counter] = useState(0) => counter is a variable (we can keep name of value as we want)
          let [counter, setCounter] = useState(0) => setCounter is a callback function, we define for the value of counter. (we can keep name of value as we want). setCounter is not standard function instead it can be anything like shikhil or anything, But for the sake of naming convention we use such values like [counter, setCounter] [login, setLogin] [isLoggedIn, setIsLoggedIn]
      3. whenever value of counter changes, setCounter will change the value of all the variables named as counter on web page
         setCounter(counter + 1) will increase the count on UI
         setCounter(counter - 1) will decrease the count on UI
         and setCounter will update the value of counter everywhere on webpage becasue state is changed according to above both
         setCounter will perform its inner operation to propagate changes on UI as the counter updates
         No Need of classes or IDs to target element manually
         (facebook ko actaully problem ye aa rhi thi purane jamane me ki, jab hum fb ke home page pe login karte the tb waha chat icon rehta tha and wo batata tha ki kitne logo ne aapko message kiya he, to jab hum upe click kiya karte the and chat karne ke baad bhi wo number of people ka variable update nahi hota tha means agar aapko 4 logo ne message kiya he aur agr aapne click karke ek user ke sath chat karli to wo technically dekha jae to 3 ho jana chahiye tha but wo actually 4 hi rehta tha and ye problem ko dekh ke facebook ne React ko introduce kiya tha)
      4. if counter goes more than 20 then it wont increase and if counter goes less than 0 then it wont decrease (optional)



****************(THIS IS THE MAIN FUNCTION OF REACT, UPDATE ONCE A ELEMENT AN CHANGE WILL HAPPEN ON EVERYWHERE ON WEBPAGE)****************
*/