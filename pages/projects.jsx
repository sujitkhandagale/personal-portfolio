import Header from '@/components/Header'
import ProjectBox from '@/components/ProjectBox'
import React from 'react'
import Project1 from "../assets/Projects/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg";
import Head from 'next/head';
function projects() {
  return (
    <>
    <Head>
      <title>Projects | Sujit Khandagale</title>
    </Head>
      <Header />
      <section className='container'>
        <div className="Heading text-center">
          <h2>Projects</h2>
        </div>
        <div className='Projects_boxes'>
          <ProjectBox Project_image={Project1} Project_Title={"Doctor Consultation"} Project_description={""} />
          <ProjectBox Project_image={Project1} Project_Title={"Doctor Consultation"} Project_description={""} />
          <ProjectBox Project_image={Project1} Project_Title={"Doctor Consultation"} Project_description={""} />
          <ProjectBox Project_image={Project1} Project_Title={"Doctor Consultation"} Project_description={""} />
        </div>
      </section>
    </>
  )
}

export default projects