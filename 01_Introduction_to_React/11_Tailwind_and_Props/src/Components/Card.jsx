import React from "react";

function Card({city="Don't know", year}){
    // console.log(props);
    console.log(city);
    
    return(
        <>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{city} technology acquisitions {year}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of {year} so far, in    reverse chronological order.</p>
            </a>
        </>
    )
}

export default Card

/*
    comments after App.jsx
    5. passed props as parameter in Card    (function Card(props))
    6. and logged the props and returns an empty object. ([[Prototype]] is a hidden scope in console which is not accesible directly) (console.log(props);)
    next comments in App.jsx    

   comments after App.jsx
   12. props is the standard name in React to inject elements
   next comments in App.jsx   
    
   comments after App.jsx
   14. Logged city here (console.log(props.city);)
   function Card(props){
    console.log(props);
    console.log(props.city);
    to inject in element, select the element whose city need to change tp this and inject like this {props.city}
   15. we can even write
        function Card({city}){
            console.log(city);
       like this
   16. Now inject the element in elements to replace part of text or anything like {city},so it will change city for the particular card in which value of city is present
   17. same way we changed value for year as well
   18. If someone doesn't passes value for prop in App.js then we can give default value as well
*/