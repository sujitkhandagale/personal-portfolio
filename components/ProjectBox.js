import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ReactPlace from "../assets/language_logos/Reactjs.png"

function ProjectBox({ Project_image, Project_Title, Project_description, Tools, Projects_Links }) {


    return (
        <div>
            <Link target={"__blank"} href={`${Projects_Links}`}>
                <div className="projects_det">
                    <div className='Project_box'>
                        <div className="Project_image">
                            <Image placeholder='image' src={Project_image} alt='img' />
                            <div className="tools_overlay">
                                <Image src={ReactPlace} />
                            </div>
                        </div>
                        <div className="Project_desc">
                            <h3>{Project_Title}</h3>
                            <p>{Project_description}</p>
                            <div className="tools">
                                {Tools}
                            </div>

                        </div>

                    </div>

                </div>

            </Link>
        </div>
    )
}

export default ProjectBox