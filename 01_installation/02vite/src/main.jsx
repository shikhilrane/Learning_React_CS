import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




/*
    Removed things from this file

    1.
      import './index.css';      (deleted index.css so no need)

*/

/*
    Understanding this file

    1. main.jsx is same as index.js(from create react app method)
    2. .jsx is jargon which use to show html in js file in vite (inshort it is js file with HTML in it)
    3. main.jsx - is main entry point (we can rename it)
    4. import { StrictMode } from 'react' and import { createRoot } from 'react-dom/client' are used to manipuate dom of web
        import { StrictMode } from 'react' => core foundational library
        import { createRoot } from 'react-dom/client' => It is implementation of react on web just like react-native is implementation on mobile
    5. ReactDOM -  is a own DOM created by React which is called as virtual DOM and then it compare it with main DOM and check differences and change only where it ned to changes according to web DOM (we will see about this later)
    6. .createRoot - createRoot lets you create a root to display React components inside a browser DOM node
    7. root.render -              <React.StrictMode>
                                    <App />
                                  </React.StrictMode>
                    renderng the <App /> to root
                    but theres is no html tag like <App /> , to yahi react sabse power deta he jsx ki power
                    Like JS ke through html ko render kar skte ho and jo jsx he wo almost HTML jesa dikhega 
                    to ek tarah se maano ko ki apn apne hisab se custom tag bana paa rahe he 
    8. <React.StrictMode>...</React.StrictMode> - It is safe for development so that we can do optimisation, We can even remove this
    9. <App /> - It a function that returns a HTML (It is also called a component)
   10. flow - 
          made a function in App.jsx that returns HTML => imported App.jsx to main.jsx => renderd main.jsx to root in index.html
*/