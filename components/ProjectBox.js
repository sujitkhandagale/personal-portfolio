import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectBox({ Project_image, Project_Title, Project_description, Tools, Projects_Links }) {


    return (
        <div>
            <Link href={`${"projects/" + Projects_Links}`}>
                <div className='Project_box'>
                    <div className="Project_image">
                        <Image placeholder='imgae' src={Project_image} alt='img' />
                    </div>
                    <div className="Project_desc">
                        <h3>{Project_Title}</h3>
                        <p>{Project_description}</p>

                    </div>
                </div>

            </Link>
        </div>
    )
}

export default ProjectBox