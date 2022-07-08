import React from 'react'
import Project from './Project';
import './style.css'

const ProjectContainer = () => {

    const projectData = [{
        name:"Project 1",
        description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
        skills:['SASS','TypeScript','React'],
        github:"https://github.com/",
        linkedIn:"https://www.linkedin.com/"
    },
    {
        name:"Project 2",
        description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
        skills:['SASS','TypeScript','React'],
        github:"https://github.com/",
        linkedIn:"https://www.linkedin.com/"
    },
    {
        name:"Project 3",
        description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
        skills: ['SASS','TypeScript','React'],
        github:"https://github.com/",
        linkedIn:"https://www.linkedin.com/"
    },
   
    ];

  return (
    <div className='projectContainer'>
        {
            projectData.map(projectItem=>{
                return <Project projectItem={projectItem}/>
            })
        }
    </div>
  )
}

export default ProjectContainer