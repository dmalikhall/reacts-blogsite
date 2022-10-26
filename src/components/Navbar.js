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
                    <a href="#" className='home-button'>
                        <FaHome />
                    </a>
                    <a href="#">About us</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="mobile-nav_header">
                    <h1>Webb Inc</h1>
                    <button className="mobile-nav_close-btn" id="close_menu-btn" onClick={closeMobileNav}>
                        <FaWindowClose />
                    </button>
                </div>

                <div className="mobile-nav_list">
                    <a className="mobile-nav-item" id="scroll-link" href="./architecture.html">Architecture</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./design.html">Design</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./urbanism.html">Urbanism</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./ecobuilding.html">Ecobuilding</a>
                    <a className="mobile-nav-item" id="scroll-link" href="./all-post.html">All Posts</a>

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
                    <a href="#" className='home-button'>
                        <FaHome />
                    </a>
                    <a href="#">About us</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>

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
                    <div className="brand"><a href="./index.html">Webb Inc.</a></div>
                    <div className="reg-navlist">
                        <a href="./architecture.html">Architecture</a>
                        <a href="./design.html">Design</a>
                        <a href="./urbanism.html">Urbanism</a>
                        <a href="./ecobuilding.html">Ecobuilding</a>
                        <a href="./all-post.html">All Posts</a>
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