import Image from 'next/image'
import Link from 'next/link'
import React, { use, useState } from 'react'
import Logo from "../assets/light_logo.png";
import MobileMenu from "../assets/hamburger-menu-icon.svg";
import NextNProgress from 'nextjs-progressbar';
import { ToggleButton } from 'react-bootstrap';
import { useRouter } from 'next/router';
function Header() {
    const router = useRouter();
    const currentRoute = router.pathname;

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
                        <Link href={"/"}><Image placeholder='imgae'src={Logo} alt='img'></Image></Link>
                    </div>
                    <div className="menu_items">
                        <ul className={open ? "menu_item hide" : "menu_item"}>
                            <li><Link className={currentRoute === '/' ?
                                "active" : "inactive"
                            } href={"/"}>Home</Link></li>
                            <li><Link className={currentRoute === '/projects' ?
                                "active" : "inactive"
                            } href={"/projects"}>Projects</Link></li>
                            <li><Link className={currentRoute === '/blogs' ?
                                "active" : "inactive"
                            } href={"/blogs"}>Blogs</Link></li>
                            <li><Link className={currentRoute === '/about' ?
                                "active" : "inactive"
                            } href={"/about"}>About Me</Link></li>
                            <li><Link className={currentRoute === '/help' ?
                                "active" : "inactive"
                            } href={"/help"}>Help</Link></li>
                            <li className='resume'><Link className={currentRoute === '/resume' ?
                                "active" : "inactive"
                            } href={"/resume"}>Resume</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header