import Image from 'next/image'
import React from 'react'

function ProjectBox({ Project_image, Project_Title, Project_description }) {
    return (
        <div className='Project_box'>
            <div className="Project_image">
                <Image src={Project_image} height={"100"} width={"100"} />
            </div>
            <div className="Project_desc">
                <h3>{Project_Title}</h3>
                <p>{Project_description}</p>
            </div>
        </div>
    )
}

export default ProjectBox