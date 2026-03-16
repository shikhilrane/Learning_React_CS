

import Customised from "./CustomisedCompo";

function App() {
  return (
    <>
      <Customised />
      <h1>This is my first react project</h1>
    </>
  );
}

export default App;











/*
    Removed things from this file

    1. 
      // import logo from './logo.svg';      (deleted logo.svg so no need)
      // import './App.css';  (App.css removed so no need)

    2. Removed from function App()
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
    </div>
*/

/*
    Understanding this file

    1. function App() - function returning html
    2. export default App; - exporting function App() to index.js
    3. import Customised from "./CustomisedCompo";
    4. Remember that, component only return single tag, so we use <></> to bind our imported component and its own tag together in single tag
    5. <></> is called a fragment
*/