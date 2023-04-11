import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../assets/light_logo.png";


function Header() {

    return (
        <div>
            <nav>
                <div className="container navbar">
                    <div className="logo">
                        <Link href={"/"}><Image src={Logo}></Image></Link>
                    </div>
                    <div className="menu_items">
                        <ul className='menu_item'>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/projects"}>Projects</Link></li>
                            <li><Link href={"/about"}>About Me</Link></li>
                            <li><Link href={"/help"}>Help</Link></li>
                            <li className='resume'><Link href={"/resume:"}>Resume</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header