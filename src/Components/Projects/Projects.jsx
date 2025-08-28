import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../assets/Project_data'
const Projects = () => {
  return (
    <div className='projects'>
        <div className='projects-title'>
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="project-container">
            {project_data.map((project,index)=>{

            })}
        </div>
      
    </div>
  )
}

export default Projects
