import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reactImg from './assets/vite.svg' // We should import it and then use this because when we directly give link of img in src, then it would get corrupted because when we build the project it will create an build folder and than build folder contains an hash of the images inside of assets.
import App from './App.jsx'
import './profile.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header>
      <img src={reactImg} alt="" style={{ height: "100px", width: "100px" }} />
      <h1>
        Hi, i am a React{" "}
        <span style={{ color: "greenYellow", textDecoration: "underline" }}>
          Developer
        </span>
      </h1>
    </header>

    <main>
      <h2 className='name-heading' >My name is Shikhil</h2>
      <ol>
        <li>i like vite </li>
        <li>lets make interactive apps</li>
        <li>build cool ui</li>
      </ol>
      <a href="#">
        <span className='hire-me-button' >Hire Me</span>
      </a>
    </main>

    <footer>
      <span>©️All rights reserved</span>
    </footer>
  </StrictMode>,
);

// Created an basic project like we build in html and css using react