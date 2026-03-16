import React from 'react'
import './TechStackCard.css'

const TechStackCard = ({image, name}) => {
  return (
    <div className="techstack-card">
        <img src={image} alt={name} />
    </div>
  )
}

export default TechStackCard