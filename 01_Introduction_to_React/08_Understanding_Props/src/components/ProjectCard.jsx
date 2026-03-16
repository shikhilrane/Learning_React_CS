import React from 'react'
import uber from '../assets/Uber_logo_2018.svg.png'
import './ProjectCard.css'
import githubIcon from '../assets/25231.png'

function ProjectCard({title,description,imgUrl,gitHubLink}) {   {/* destructiong of element for object for props */}
  return (
    <div className='project-card'>
        <div className="img-wrapper">
            <img src={imgUrl} alt=""/>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={gitHubLink} className='img-button' target='_blank'>
          <img src={githubIcon} alt={"Project Icon"+title}/> 
          <span>View on GitHub</span> 
          </a>
    </div>
  )
}

export default ProjectCard