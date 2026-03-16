import React from 'react'

import "./profile.css";
import "./Main.css"
import rightArrow from "../../assets/right-arrow.svg";
import ProjectCard from '../../components/ProjectCard';

function Main() {
  return (
    <main>
      <h2 className="name-heading">My name is Shikhil</h2>
      <ol>
        <li>i like vite </li>
        <li>lets make interactive apps</li>
        <li>build cool ui</li>
      </ol>
      <a href="#">
        <span className="hire-me-button">
          Hire Me <img src={rightArrow} alt="Right Arrow" />{" "}
        </span>
      </a>

      <section className='project-section' >
        <h2>These are my projects</h2>
        <p>I build high-quality Projects of all shapes and sizes</p>
        <div className="project-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </main>
  );
}

export default Main