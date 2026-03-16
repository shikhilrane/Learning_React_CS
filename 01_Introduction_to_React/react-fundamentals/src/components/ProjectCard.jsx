import React from 'react'
import './ProjectCard.css'
import GitHubIcon from '../assets/github.svg'

const ProjectCard = ({title, description, imgUrl, gitHubLink="https://google.com", children}) => {

  console.log(children)

  return (
    <div className="project-card">
        <div className="img-wrapper">
            <img src={imgUrl} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={gitHubLink} className="img-button">
          <img src={GitHubIcon} alt={"Project Img "+title} />
          <span>View on GitHub</span>
        </a>
    </div>
  )
}

export default ProjectCard