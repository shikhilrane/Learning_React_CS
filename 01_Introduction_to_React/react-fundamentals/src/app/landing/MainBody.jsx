import React from 'react'
import rightArrow from '../../assets/right-arrow.svg'
import ProjectCard from '../../components/ProjectCard'
import TechStackCard from '../../components/TechStackCard'
import YellowBorder from '../../components/YellowBorder'
import './MainBody.css'

const MainBody = () => {

  const projectList = [
    {
      title: "Uber Clone Application",
      description: "This project showcases how to build a ride bookig Application in Spring Boot",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      gitHubLink: "https://www.github.com/Anuj-Kumar-Sharma/"
    },
    {
      title: "The LinkedIn Microservice Project",
      description: "This project showcases a microservice architecture of LinkedIn Application",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png",
      gitHubLink: "https://www.github.com/Anuj-Kumar-Sharma/"
    },
    {
      title: "AirBnb Hotel Booking Clone",
      description: "AirBnb clone App using Spring Boot and React",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png",
      gitHubLink: "https://www.github.com/Anuj-Kumar-Sharma/"
    },
  ]

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
      <h2 className="name-heading">My name is Shikhil</h2>
      <ol>
        <li>I like React Programming</li>
        <li>I like Vite also, Webpack not so much</li>
        <li>Let's build some interactive React Projects!</li>
      </ol>
      <a href="#" className="hire-me-button">
        <span>Hire Me</span>
        <img src={rightArrow} alt="Right Arrow" />
      </a>

      <section className="project-section">
          <h2>These are my Projects</h2>
          <p>I build high-quality Projects of all shapes and sizes</p>

          <div className="project-container">
            {projectList.map(project => <ProjectCard {...project} key={project.title} />)}
          </div>
      </section>

      <section className="techstack-section">
        <h2>Technologies that I know</h2>
        <p>I have listed some of my top skills here, I know more ofcourse</p>

        <div className="techstack-container">
          {techStackList.map(techstack => <TechStackCard {...techstack} key={techstack.name} />)}
        </div>

      </section>

    </main>

  )
}

export default MainBody