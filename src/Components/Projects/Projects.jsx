import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../assets/Project_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div className='projects'>
              <div className="Services-title">
                <h1>Latest Project</h1>
                <img src={theme_pattern} alt="" />
              </div>
        {/* <div className='projects-title'>
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt="" />
        </div> */}
        <div className="projects-container">
            {project_data.map((project,index)=>{
                return <img key={index} src={project.w_img} alt="" />
            })}
        </div>
        <div className="projects-showmore">
            <p>Show More</p>
            <img src={ arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Projects
