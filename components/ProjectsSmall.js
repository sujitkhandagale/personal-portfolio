import React, { Suspense, useState } from 'react'
import ProjectBox from './ProjectBox'
import Project1 from "../assets/Projects/bus-booking-template.sujitkhandagale.in_.png";
import Project2 from "../assets/Projects/doctor-consultation.sujitkhandagale.in_.png";
import Project3 from "../assets/Projects/test.asiaticesports.com_.png";
import Project4 from "../assets/Projects/asiatic.jpeg";

import MongoDb from "../assets/language_logos/mongodb.png";


function ProjectsSmall() {

    const [project, setProject] = useState();

    const ToggleProjects = () => {
        setProject(!project)
    }
    return (
        <section className='Home_projects'>
            <div className='container Heading'>
                <h2>My Projects</h2>
            </div>
            <div className="container">
                <div className="Projects_boxes">
                    <Suspense fallback={"Loading"}>
                    <ProjectBox Projects_Links={"https://bus-booking-template.sujitkhandagale.in/"} Project_image={Project1} Project_Title={"Bus Booking Template"} Project_description={"Bus Booking Website is Made on Reactjs with React Router Dom V6, And Scss ..."} Tools={""} />
                    </Suspense>
                   
                    <ProjectBox Projects_Links={"https://doctor-consultation.sujitkhandagale.in/"} Project_image={Project2} Project_Title={"Doctor Consultation"} Project_description={"This Project is made for doctor consulatation. thought online web app..."} />
                    <ProjectBox Projects_Links={"http://www.asiaticesports.com/"} Project_image={Project3} Project_Title={"Asiatic Esports App"} Project_description={"Online Tournaments Organizing app.  player can join and play free..."} />
                   
                </div>
            </div>
        </section>
    )
}

export default ProjectsSmall