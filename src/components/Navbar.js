import React, { useState } from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaHome, FaBars, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const openMobileNav = () => {
        setMobileNavOpen(true)
    }
    const closeMobileNav = () => {
        setMobileNavOpen(false)
    }
    return (
        <>
            <div className={`${!isMobileNavOpen ? 'mobile-nav' : 'mobile-nav open_mobile-nav'}`}>
                <div className="mobile-header">
                    <Link to='/' className='home-button' onClick={closeMobileNav}>
                        <FaHome />
                    </Link>

                    {/* <a href="#">About us</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a> */}
                </div>
                <div className="mobile-nav_header">
                    <Link to='/' onClick={closeMobileNav}>
                        <h1>Webb Inc</h1>

                    </Link>

                    <button className="mobile-nav_close-btn" id="close_menu-btn" onClick={closeMobileNav}>
                        <FaWindowClose />
                    </button>
                </div>

                <div className="mobile-nav_list">
                    <Link to='/architecture' onClick={closeMobileNav}>
                        Architecture

                    </Link>
                    <Link to='/design' onClick={closeMobileNav}>Design</Link>
                    <Link to='/urbanism' onClick={closeMobileNav}>Urbanism</Link>
                    <Link to='/ecobuilding' onClick={closeMobileNav}>Ecobuilding</Link>
                    <Link to='/all-post' onClick={closeMobileNav}>All Posts</Link>
                    {/* <a className="mobile-nav-item" id="scroll-link" href="./architecture.html">Architecture</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./design.html">Design</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./urbanism.html">Urbanism</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./ecobuilding.html">Ecobuilding</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./all-post.html">All Posts</a> */}

                    <div className="mobile-socials">
                        <a href="https://www.facebook.com/" >
                            <FaFacebookSquare />
                        </a>
                        <a href="https://www.instagram.com/" >
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/">
                            <FaTwitterSquare />
                        </a>
                    </div>
                </div>
            </div>
            <header>
                <div className="header-info">
                    <Link to='/' className='home-button'>
                        <FaHome />
                    </Link>
                    {/* <a href="#">About us</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a> */}

                </div>

                <div className="header-social">
                    <a href="https://www.facebook.com/" >
                        <FaFacebookSquare />
                    </a>
                    <a href="https://www.instagram.com/" >
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/">
                        <FaTwitterSquare />
                    </a>
                </div>
            </header>

            <div className="container">
                <nav>
                    <div className="brand">
                        <Link to='/'>Webb Inc.</Link>
                    </div>
                    <div className="reg-navlist">
                        <Link to='/architecture'>
                            Architecture

                        </Link>
                        <Link to='/design'>Design</Link>
                        <Link to='/urbanism'>Urbanism</Link>
                        <Link to='/ecobuilding'>Ecobuilding</Link>
                        <Link to='/all-post'>All Posts</Link>
                        {/* <a href="./architecture.html">Architecture</a>
                        <a href="./design.html">Design</a>
                        <a href="./urbanism.html">Urbanism</a>
                        <a href="./ecobuilding.html">Ecobuilding</a>
                        <a href="./all-post.html">All Posts</a> */}
                    </div>
                    <button className="menu-btn" id="open_menu-btn" onClick={openMobileNav}>
                        <FaBars />
                    </button>
                </nav>
            </div>
        </>

    )
}

export default Navbar