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