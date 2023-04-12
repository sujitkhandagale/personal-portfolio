import React from "react";
// import "./Socialmedia.scss";
import Github from "../assets/github.png";
import Link from "next/link";
import Image from "next/image";


function Socialmedia() {
  return (
    <>
      <Link href={"/"}>
        <div className="Social_media_position">
          <Image src={Github} alt="Social Media" />
          <h6> Find Me</h6>
        </div>
      </Link>
    </>

  );
}

export default Socialmedia;
