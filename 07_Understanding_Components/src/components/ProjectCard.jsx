import React from 'react'
import uber from '../assets/Uber_logo_2018.svg.png'
import './ProjectCard.css'
import github from '../assets/github.svg'

function ProjectCard() {
  return (
    <div className='project-card'>
        <div className="img-wrapper">
            <img src={uber} alt="" />
        </div>
        <h3>Uber Clone App</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus alias dolore cupiditate eaque sit repellat quaerat ex dolores itaque.</p>
        <a href={github} className='img-button'><img src="" alt="GitHub Icon" /> <span>View on GitHub</span> </a>
    </div>
  )
}

export default ProjectCard