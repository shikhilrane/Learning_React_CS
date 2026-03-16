import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let myObj ={
    name : "Shikhil",
    age : 28
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-3xl mb-5'>Tailwind Test</h1>
      <Card val="Shikhil" someObj={myObj} someArr={myArr}/>
      <Card city="Indore" year="2024"/>
      <Card city="Nashik" year="2025"/>
    </>
  )
}

export default App



/*
    1. We have imported Card from ./Components/Card
    2. in returns we imported it 3 times
    3. But these 3 cards can contain different infos like name, heading or anything
    4. So to brings that changes we use props
    next comments in Card.jsx

    comments after Card.jsx
    7. pushed value as val="Shikhil" it shows in first card then its object shows value in console
    8. we can pass string directly but we can't pass arrays, objects directly in element's attribute
    9. As we saw in 02_Custom_React folder, we can only push evaluated expression in element
   10. So made object and array outside return and passed its reference in element within {}
   11. These injecting of properties in elements happens because we injected props in Card() and if we don't inject props in Card() then it will show error
   next comments in Card.jsx

   comments after Card.jsx
   13. Passed city="Indore" in second element
   next comments in Card.jsx


*/