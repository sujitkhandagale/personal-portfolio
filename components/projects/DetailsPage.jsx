import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PlaceholderImg from "../../assets/Projects/screenshot-1684480033268.jpeg";
import Image from 'next/image';

function DetailsPage() {
    return (
        <>
            <div className="container">
                <div className="project_details_page">
                    <div className="projects_images">
                        <Carousel>
                            <div>
                                <Image className='project_slider_img' src={PlaceholderImg} />
                            </div>
                            <div>
                                <Image className='project_slider_img' src={PlaceholderImg} />
                            </div>
                            <div>
                                <Image className='project_slider_img' src={PlaceholderImg} />

                            </div>
                        </Carousel>
                    </div>
                    <div className="tools_used">
                        <div className="heading">
                            <div className='  Project_Name'>Project Name :</div>


                            <div className='duration'> Duration : </div>
                            <div className="tools">Tools Used : </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsPage
