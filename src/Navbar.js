import React from 'react';
import './Navbarstyle.css'

const Navbar = () => {
    return (
        <nav className = "navbarstyle">
            <label className = "logo">My Devfolio</label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">My Work</a></li>
                <li><a href="#">My Resume</a></li>
                <li><a href="#">Reach Me</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;