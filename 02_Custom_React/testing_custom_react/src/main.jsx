import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// // For 3 and 4
// function MyApp() {
//     return(
//       <div>
//           <h1>Custom App</h1>
//       </div>
//     )
// }
// // for 5
// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     content: "Click me to visit google"
// }

// // 6
// const anotherElement = (
//   <a href="https://google.com" target="_blank">Click me to visit google</a>
// )

// // 7
// const reactElementOfReact = React.createElement(
//     "a",
//     {href: "https://google.com",  target: "_blank"},
//     "Click me to visit google"
// )

// // 9
// const anotherUser = "Shikhil Kishor Rane"
// const reactElementOfReactOne = React.createElement(
//     "a",
//     {href: "https://google.com",  target: "_blank"},
//     "Click me to visit google ",
//     anotherUser
// )


createRoot(document.getElementById('root')).render(

    // <StrictMode>   
    //     <App />     
    // </StrictMode>,           // 1.

    // <App />                  // 2.

    // <MyApp />                // 3.

    // MyApp()                  // 4.

    // reactElement             // 5.

    // anotherElement           // 6.

    // reactElementOfReact      // 7.

    // <App/>                   // 8.

    // reactElementOfReactOne   // 9.
)


/*
    WE NEED TO UNDERSTAND, REACT ACCEPTS COMPONENTS AS FUNCTIONS, AND THE BUNDLER (LIKE BABEL) TRANSFORMS JSX INTO OBJECTS THAT REACT USES TO UPDATE THE DOM. (React.createElement() JSX ko JavaScript object (React element) me convert karne ke liye use hota hai jise React DOM me render karta hai.)
                                                       JSX                (HTML + JS (Like Component))
                                                        ↓
                                                    Babel convert         (converts JSX into JS)
                                                        ↓
                                                React.createElement()     (Converts using this method)
                                                        ↓
                                              React element (JS object)   (JavaScript object)
                                                        ↓
                                                  React DOM render        (Virtual DOM me render)
                                                        ↓
                                                  Real DOM render         (Virtual DOM me render)

    Babel transforms JSX (including fragments) into React function calls.
    React renders those elements into the webpage’s DOM.

    Babel converts JSX into a React.createElement() like this:

      1. In JSX :
        <a href="https://google.com">Click me</a>

      2. This object has 3 main parts:

        2.1. type : Element or component name
          JSX       → <a>Click me</a>
          JS Object → type: "a"

        2.2. props : Attributes / properties of the element
          JSX       → <a href="https://google.com">
          JS Object → props: {
                          href: "https://google.com"
                      }

        2.3. children : Content inside the element (inside props)
          JSX       → <a>Click me</a>
          JS Object → children: "Click me"
      
      3. In React.createElement() : 
        {
          type: "a",
          props: {
            href: "https://google.com",
            children: "Click me"
          }
        }


    1. Normal calling with <StrictMode>...</StrictMode>
    2. Normal calling without <StrictMode>...</StrictMode>
    3. When we render a normal function as JSX, it still works because React uses a bundler like Babel. Babel converts JSX into JavaScript ( Using React.createElement). React then uses these created JavaScript objects to create the DOM tree and render the UI.
        JSX → Babel convert → JavaScript → React render
    4. we can even run function like this but it STRICTLY NOT RECOMMENDED
    5. If we think, from 3rd point, jsx convt into js object then reactElement should have even run
      - but it doesn't happen because bundler take jsx and convt it into js object to make dom tree but it accepts a function to execute in root instead we are passing directly object in root to execute which is not executeable
        (JSX works because Babel converts it into a valid React element, but our manually created object (It need HTML and JS to execute) is not a valid React element.) (Apne custom naam ke properties isme nahi chalte isliye ye nhi chalega. Refer point 7 ki kese wale chalenge)
    6. This works, it get converted into object in dom
      - so why 5. is not working? You're creating a similar-looking object manually (reactElement). But React accepts JSX, and rejects your custom object.
        It will get converted into 
            const anotherElement = React.createElement(
              "a",
              { href: "https://google.com", target: "_blank" },
              "Click me to visit google"
            )
        this.
    7. This element is created by using React library
    8. Injected variable in function of App.jsx. 
    9. Injecting variable in react element. we can only push evaluated expression in element and can't use things if statement in such things because at the end of the day this element get convt into object and object doens't support non-evaluated expressions

    SHORT NOTE : Manually created objects (like reactElement) render nahi hote kyunki wo valid React element structure follow nahi karte(Jese manually naam nahi de skte properties ke kyuki apn to use kuchh bhi naam de skte he). Babel sirf JSX ko React.createElement() me convert karta hai, isliye JSX aur React.createElement() se bane elements hi render hote hain.
*/