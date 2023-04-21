import Image from 'next/image'
import React from 'react'
import Mongodb from "../assets/language_logos/mongodb.png";
import JavaScript from "../assets/language_logos/JavaScript.png";
import NodeLogo from "../assets/language_logos/node.png";
import sass from "../assets/language_logos/sass.png";
import Html from "../assets/language_logos/Html.png";
import ReactLogo from "../assets/language_logos/Reactjs.png";
const Languages = [Mongodb, ReactLogo, JavaScript, NodeLogo, sass, Html];
function Technology() {
  return (
    <section className='Technology'>
      <div className="container">
        <h2>Technology i used</h2>
        <div className="Technology_boxes">
          {Languages.map((logo) => (<div className="Technology_box">
            <div className="logo" key={logo.id}>
              <Image src={logo} alt='img' />

            </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Technology
