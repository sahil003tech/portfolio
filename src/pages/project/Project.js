import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Project = ({projectItem}) => {

    const {name, description, skills, github, linkedIn} = projectItem; 
    
  return (
     <>
    <div className='card'>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="skillContainer">
                {skills.map(skill=>(
                  <span className="skills">{skill}</span>
                ))}
            </div>
            <span className="projectLink">
                <a href={github}><FaGithub className='cardIcon icon--hover'/></a>
            </span>            
            <span>
                <a href={linkedIn}><FaLinkedin className='cardIcon icon--hover'/></a>
            </span>
    </div>
    </>
  )
}

export default Project