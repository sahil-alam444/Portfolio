import React from 'react'

const ProjectCard = (props) => {
    return (
        <div id='projectCard' className='bg-red-600 h-96 w-72 p-5 text-center'>
            <div className="m-3 h-3/5 bg-green-300">
                <img src={props.src} />
            </div>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default ProjectCard
