import Image from 'next/image'
import Link from 'next/link'
import React, { use, useState } from 'react'
import Logo from "../assets/light_logo.png";
import MobileMenu from "../assets/hamburger-menu-icon.svg";
import NextNProgress from 'nextjs-progressbar';
import { ToggleButton } from 'react-bootstrap';
function Header() {

    const [open, setOpen] = useState([]);
    const ToggleClass = () => {
        setOpen(!open)
    }
    return (
        <div>
            <NextNProgress color="#ff0000
" startPosition={0.3} stopDelayMs={200} height={1} showOnShallow={true} />
            <div className="Mobile_icon">
                <i onClick={ToggleClass} className="fa-solid fa-bars"></i>
            </div>
            <nav>
                <div className="container navbar">
                    <div className="logo">
                        <Link href={"/"}><Image src={Logo} alt='img'></Image></Link>
                    </div>
                    <div className="menu_items">
                        <ul className={ open ? "menu_item hide" : "menu_item"}>
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