import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reactImg from "./assets/vite.svg"; // We should import it and then use this because when we directly give link of img in src, then it would get corrupted because when we build the project it will create an build folder and than build folder contains an hash of the images inside of assets.

import Header from './app/landing/Header';
import Main from "./app/landing/Main";
import Footer from "./app/landing/Footer";

import Index from './app/landing/Index'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);

// Created an basic project like we build in html and css using react
