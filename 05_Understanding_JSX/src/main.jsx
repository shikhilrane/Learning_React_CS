import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const writingPara = <h1>Lorem ipsum dolor sit amet.</h1> // for 1. 4.
const name = "Shikhil";                                  // for 2.
const age = 29;                                          // for 4.
const checkName = "";                                    // for 5.
const styleObj = {                                       // for 6.
  color: "yellow",
  backgroundColor: "red",
  display: "inline",
  padding: "14px 10px",
  margin: "10px"
};
function getGreeting() {                                 // for 8.
  return "Hello Shikhil!";
}
const numbers = [1, 2, 3, 4, 5];                         // for 9.1.
const fruits = ["Apple", "Mango", "Banana"];             // for 9.2.
const users = [                                          // for 9.3.
  { id: 1, name: "Shikhil" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    {/* 1. Injecting external element in JSX (It should be inject within {}) */}
    {writingPara}

    {/* 2. Inject variable in JSX (It should be inject within {})*/}
    <h2>My name is {name}</h2>

    {/* 3. Giving class and id to element (here class is reserved keyword in JS so we have to use className but react later convert this className to class in browser. We can check that in browser in inspect. Also there can be as many as className but only single ID) */}
    <p className="thisIsClass1 thisIsClass2" id="thisIsID">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate.
    </p>

    {/* 4. Conditional Statements in JSX. React supports if statements but not inside JSX. Because if statements are not expression in JS. So, we should use ternary operators here because ternary operator provides an expression*/}
    {/* If age is greater than 25 then render writingPara else "" */}
    {age >= 25 ? writingPara : ""}

    {/* 5. Conditional Rendering. If the checkName is present only then render this element or else don't render the element */}
    {checkName && <h4>Lorem ipsum dolor sit.</h4>}

    {/* 6. Using Double Curlies. We can use double curly brackets {{}} to pass inline styling and objects in React */}
    {/* Inline styling */}
    <p
      style={{
        color: "yellow",
        backgroundColor: "red",
        display: "inline",
        padding: "14px 10px",
        margin: "10px",
      }}
    >
      {" "}
      Lorem, ipsum dolor.
    </p>
    {/* Passing an Object*/}
    <p style={styleObj}>
      Lorem, ipsum dolor Lorem, ipsum dolor. Lorem ipsum dolor sit.
    </p>

    {/* 7. Calculations */}
    {2 + 2}
    <p></p>
    {5 + 8 + 4 + 7 + 9 - (5 * 7) / 2}

    {/* 8. Rendering Functions */}
    <h1>{getGreeting()}</h1>

    {/* 9. Rendering Arrays */}
    {/* 9.1 Rendering normal array */}
    {numbers}
    {/* 9.2 Rendering array elements using .map() */}
    {fruits.map((fruit) => (
      <p>{fruit}</p>
    ))}
    {/* 9.3 Rendering Array of Objects */}
    {users.map((user) => (
      <h3 key={user.id}>{user.name}</h3> // key React ko batata hai ki list me har element unique hai, jisse React efficiently update aur re-render kar pata hai
    ))}
  </StrictMode>,
);
