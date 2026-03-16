import UserCard from "./components/userCard"

import "./App.css";

import eh23 from './assets/Erling_Haaland_2023.jpg' // to use image, we have to import image then use it in {}
import foden from './assets/foden.webp'
import marmoush from './assets/marmoush.jpeg'
import doku from './assets/Doku.jpg'

function App() {

  return (
    <div className="container">
      <UserCard name="Erling Braut Haalnd" birthYear="2000" image={eh23} style={{"border-radius":"10px"}}/>
      <UserCard name="Phil Foden" birthYear="2001" image={foden} style={{"border-radius":"10px"}}/>
      <UserCard name="Omar Marmoush" birthYear="1998" image={marmoush} style={{"border-radius":"10px"}}/>
      <UserCard name="Jeremy Doku" birthYear="2002" image={doku} style={{"border-radius":"10px"}} />
    </div>
  )
}

export default App