import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reactImg from './assets/vite.svg' // We should import it and then use this because when we directly give link of img in src, then it would get corrupted because when we build the project it will create an build folder and than build folder contains an hash of the images inside of assets. So its always better to first import the image and then use
import App from './App.jsx'   // Import a jsx file like this
import './profile.css'        // Import a css file like this

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Header Section */}
    <header>
      <img src={reactImg} alt="" style={{ height: "100px", width: "100px" }} />{" "}
      {/* This is how inline css to use */}
      <h1>
        Hi, i am a React{" "}
        <span style={{ color: "greenYellow", textDecoration: "underline" }}>
          {" "}
          Developer{" "}
        </span>
      </h1>
    </header>

    {/* Main Section */}
    <main>
      <h2 className="name-heading">My name is Shikhil</h2> {/* target an element to style in .css file */}
      <ol>
        <li>i like vite </li>
        <li>lets make interactive apps</li>
        <li>build cool ui</li>
      </ol>
      <a href="#">
        <span className="hire-me-button">Hire Me</span>
      </a>
    </main>

    {/* Footer Section */}
    <footer>
      <span>©️All rights reserved</span>
    </footer>
  </StrictMode>,
);

// Created an basic project like we build in html and css using react