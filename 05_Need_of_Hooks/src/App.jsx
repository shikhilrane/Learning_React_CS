import './App.css'

function App() {

  let counter = 5;

  function addValue() {
    console.log("Clicked", new Date(), counter);
    counter += 1;
  }
  return (

    <>
      <h1>Hi</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button>Remove value {counter}</button>

      <p>Footer : {counter}</p>
    </>
  );
}

export default App