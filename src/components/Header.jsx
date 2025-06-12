import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Medialine from './Medialine';
import '../styles/header.scss';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        <div className='header'>
            <Medialine/>
            <div className='header-container'>
                <div className='header-logo'>
                    <a href="#"><h2><span>&lt;/&gt;</span>Kovac</h2></a>
                </div>
                
                {/* Desktop links */}
                <div className='header-links'>
                    <ul>
                        <li><a href="#"><span>#</span>home</a></li>
                        <li><a href="#"><span>#</span>works</a></li>
                        <li><a href="#"><span>#</span>about-me</a></li>
                        <li><a href="#"><span>#</span>contacts</a></li>
                    </ul>
                    <div className="language-dropdown">
                        <div className="selected-lang">EN<FontAwesomeIcon icon={faAngleDown} /></div>
                        <div className="dropdown-options">
                            <div>EN</div>
                            <div>SR</div>
                        </div>
                    </div>
                </div>

                {/* Hamburger button */}
                <div className='hamburger' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>

                {/* Mobile menu */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#" onClick={() => setIsOpen(false)}><span>#</span>home</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}><span>#</span>works</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}><span>#</span>about-me</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}><span>#</span>contacts</a></li>
                    </ul>
                    <div className="mobile-lang">
                        <span>EN</span>
                        <span>SR</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;