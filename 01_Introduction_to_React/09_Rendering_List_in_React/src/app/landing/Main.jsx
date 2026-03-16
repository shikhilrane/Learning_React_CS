import React from 'react'

import "./profile.css";
import "./Main.css"
import rightArrow from "../../assets/right-arrow.svg";
import ProjectCard from '../../components/ProjectCard';
import Uber from '../../assets/Uber_logo_2018.svg.png'
import Airbnb from "../../assets/airbnb.png";
import LinkedIn from "../../assets/linkedin.png";
import YellowBorder from '../../components/YellowBorder';
import TechStackCard from '../../components/TechStackCard';

function Main() {

  // const uberInProject = {
  //   title: "Uber Clone App",
  //   description : "This project showcases how to build a ride bookig Application in Spring Boot",
  //   imgUrl: Uber,
  //   gitHubLink: "https://github.com/shikhilrane"
  // };

  // const airBnbInProject = {
  //   title: "AirBnb Hotel Booking Clone",
  //   description: "AirBnb clone App using Spring Boot and React",
  //   imgUrl: Airbnb,
  //   gitHubLink: "https://github.com/shikhilrane"
  // };

  // const linkedInProject = {
  //   title: "The LinkedIn Microservice Project",
  //   description: "This project showcases a microservice architecture of LinkedIn Application",
  //   imgUrl: LinkedIn,
  //   gitHubLink: "https://github.com/shikhilrane"
  // };

  const fruits = ["Apple", "Kiwi", "Mango"];  // To Iterate over an array 

  const projectList = [           // To put values in jsx component for props
    {
      title: "Uber Clone App",
      description: "This project showcases how to build a ride bookig Application in Spring Boot",
      imgUrl: Uber,
      gitHubLink: "https://github.com/shikhilrane",
    },

    {
      title: "AirBnb Hotel Booking Clone",
      description: "AirBnb clone App using Spring Boot and React",
      imgUrl: Airbnb,
      gitHubLink: "https://github.com/shikhilrane",
    },

    {
      title: "The LinkedIn Microservice Project",
      description: "This project showcases a microservice architecture of LinkedIn Application",
      imgUrl: LinkedIn,
      gitHubLink: "https://github.com/shikhilrane",
    },
  ];

  const techStackList = [
    { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "ShadCN Ui", image: "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161105/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png" },
    { name: "Spring Boot", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg" },
    { name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/800px-Kubernetes_logo_without_workmark.svg.png" },
    { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MySQL", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Kafka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/800px-Apache_Kafka_logo.svg.png" },
    { name: "Redis", image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg" }
  ];

  return (
    <main>
      <YellowBorder>
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

      <ul>  {/* Iterationg over fruits */}
        {fruits.map((frt,index) => {
          return <li key={index} >{frt}</li>;           {/* React me jab bhi map() se list render karo, har element ko unique key prop dena zaroori hai. */}
        })}
      </ul>

      <section className="project-section">
        <h2>These are my projects</h2>
        <p>I build high-quality Projects of all shapes and sizes</p>
        <div className="project-container">
          {/* <ProjectCard {...uberInProject} />
          <ProjectCard {...airBnbInProject} />
          <ProjectCard {...linkedInProject} /> */}
          {projectList.map((project) => (         // Iterating over value projectList to add values for props
            <ProjectCard key={project.title} {...project} /> // Made project of title as key so react can segreagate them on basic of key
          ))}
        </div>
      </section>

      <section className="techstack-section">
        <h2>Technologies that I know</h2>
        <p>I have listed some of my top skills here, I know more ofcourse</p>

        <div className="techstack-container">
          {techStackList.map((techlist,index) => (
            <TechStackCard key={index} {...techlist} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main