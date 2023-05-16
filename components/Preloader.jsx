import Image from 'next/image'
import React from 'react'
// import PreloaderImg from "../assets/loader.gif";
import { RotateSpinner } from "react-spinners-kit";
function Preloader() {
  return (
    <div className='preloader'>
      <RotateSpinner color="#ff0000"/>
    </div>
  )
}

export default Preloader
