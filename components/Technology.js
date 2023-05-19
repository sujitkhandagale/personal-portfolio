import Image from 'next/image'
import React from 'react'
import Mongodb from "../assets/language_logos/mongodb.png";
import JavaScript from "../assets/language_logos/JavaScript.png";
import NodeLogo from "../assets/language_logos/node.png";
import sass from "../assets/language_logos/sass.png";
import Html from "../assets/language_logos/Html.png";
import ReactLogo from "../assets/language_logos/Reactjs.png";
import NextJs from "../assets/language_logos/nextjs.png";
const Languages = [
  {
  id: 1,
 img:Mongodb,
},
{
  id: 2,
  img: ReactLogo,
},
{ 
  id: 3,
  img:JavaScript
},
{ 
  id:4,
  img:  NodeLogo
},
{
  id:5,
  img:  sass
},
{
  id:6,
  img: Html
},
{
  id:7,
  img: NextJs
}
];
function Technology() {
  return (
    <section className='Technology'>
      <div className="container">
        <h2>Technology i used</h2>
        <div className="Technology_boxes">
          {Languages.map((logo) => (<div className="Technology_box" key={logo.id}>
            <div className="logo">
              <Image placeholder='imgae'src={logo.img} alt='img' />

            </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Technology
