import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar bg-black text-white p-4">
            <div className="menu-icon" onClick={toggleMenu}><FaBars /></div>
            <ul className={`menu-list flex text-center space-x-12 hover:space-x-14 font-sans list ${isMenuOpen ? "open" : ""}`}>
                <li className="li rounded border-2 border-y-black border-x-black hover:border-x-indigo-500"><Link to="/">Home</Link></li>
                <li className="li li-1 rounded border-2 border-y-black border-x-black hover:border-x-indigo-500"><Link to="/about-me">About Me</Link></li>
                <li className="li li-1 rounded border-2 border-y-black border-x-black hover:border-x-indigo-500"><Link to="/my-projects">My Projects</Link>   </li>
                <li className="li li-1 rounded border-2 border-y-black border-x-black hover:border-x-indigo-500"><Link to="/contact-me">Contact Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
