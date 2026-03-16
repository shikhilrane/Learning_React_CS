import React from 'react'

import "./profile.css";
import "./Main.css"
import rightArrow from "../../assets/right-arrow.svg";
import ProjectCard from '../../components/ProjectCard';
import Uber from '../../assets/Uber_logo_2018.svg.png'
import Airbnb from "../../assets/airbnb.png";
import LinkedIn from "../../assets/linkedin.png";
import YellowBorder from '../../components/YellowBorder';

function Main() {

  const uberInProject = {
    title: "Uber Clone App",
    description : "This project showcases how to build a ride bookig Application in Spring Boot",
    imgUrl: Uber,
    gitHubLink: "https://github.com/shikhilrane"
  };

  const airBnbInProject = {
    title: "AirBnb Hotel Booking Clone",
    description: "AirBnb clone App using Spring Boot and React",
    imgUrl: Airbnb,
    gitHubLink: "https://github.com/shikhilrane"
  };

  const linkedInProject = {
    title: "The LinkedIn Microservice Project",
    description: "This project showcases a microservice architecture of LinkedIn Application",
    imgUrl: LinkedIn,
    gitHubLink: "https://github.com/shikhilrane"
  };

  return (
    <main>
      <YellowBorder>    {/* Wrapper component hai jo apne andar ke content ko yellow border style ke saath wrap karta hai. */}
        <h2 className="name-heading">My name is Shikhil</h2>
      </YellowBorder>
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

      <section className="project-section">
        <h2>These are my projects</h2>
        <p>I build high-quality Projects of all shapes and sizes</p>
        <div className="project-container">
          <ProjectCard {...uberInProject} /> {/* we can spread all the values in given component using spread operator */}
          <ProjectCard {...airBnbInProject} />
          <ProjectCard {...linkedInProject} />
        </div>
      </section>
    </main>
  );
}

export default Main