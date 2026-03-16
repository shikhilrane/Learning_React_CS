


import Customised from "./CustomisedCompo"


function App() {

  return (
    <>
      <Customised/>
      <p>Returning multiple element</p>
    </>
  )
}

export default App







/*
    Removed things from this file

    1.
      import { useState } from 'react'      (deleted dont know as of now)
      import reactLogo from './assets/react.svg'  (deleted becasue we deleted assets folder)
      import viteLogo from '/vite.svg'      (deleted becasue we deleted vite.svg)
      import './App.css'                    (deleted becasue we deleted App.css)

    2. Removed from function App() : 
      const [count, setCount] = useState(0)

      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>

*/


/*
    Understanding this file

    1. import Customised from "./CustomisedCompo" = is the imported component that we use in this component
    2. function App() = function in which we importing component or adding element
    3. Remember that, component only return single tag, so we use <></> to bind our imported component and its own tag together in single tag
    4. <></> is called a fragment
*/