import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);









 

/*
    Removed things from this file

    1.
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals();
    
    2. 
      // import './index.css';      (deleted index.css so no need)
      // import reportWebVitals from './reportWebVitals';  (reportWebVitals(); removed so no need)

*/

/*
    Understanding this file

    1. main.jsx (from vite) = index.js 
    2. index.js - is main entry point (we can rename it)
    3. import React from 'react'; and import ReactDOM from 'react-dom/client'; are used to manipuate dom of web
        import React from 'react' => core foundational library
        import ReactDOM from 'react-dom/client' => It is implementation of react on web just like react-native is implementation on mobile
    4. const root - is targeted element from /public/index.html
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
          made a function in App.js that returns HTML => imported App.js to index.js => renderd index.js to root in index.html

*/