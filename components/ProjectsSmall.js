import React from 'react'
import ProjectBox from './ProjectBox'
import Project1 from "../assets/Projects/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg";
import Project2 from "../assets/Projects/bus-booking.png";

import MongoDb from "../assets/language_logos/mongodb.png";

function ProjectsSmall() {
    return (
        <section className='Home_projects'>
            <div className='container Heading'>
                <h2>My Projects</h2>
            </div>
            <div className="container">
                <div className="Projects_boxes">
                  
                    <ProjectBox Projects_Links={"/bus-booking-template"} Project_image={Project2} Project_Title={"Bus Booking Template"} Project_description={"Bus Booking Website is Made on Reactjs with React Router Dom V6, And Scss ..."} />
                    <ProjectBox Project_image={Project1} Project_Title={"Doctor Consultation"} Project_description={""} />
                    <ProjectBox Project_image={Project1} Project_Title={"Doctor Consultation"} Project_description={""} />
                    <ProjectBox Project_image={Project1} Project_Title={"Bus Booking Template"} Project_description={""} />
                </div>
            </div>
        </section>
    )
}

export default ProjectsSmall