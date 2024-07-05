import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    let location = useLocation();
    let currentPage="0";
    switch ((location.pathname)) {
        case '/':
            currentPage = "Home Page";
            break;
        case '/about-me':
            currentPage = "About Me";
            break;
        case '/my-projects':
            currentPage = "My Projects";
            break;
        case '/contact-me':
            currentPage = "Contact Me";
            break;
        default:
            currentPage = "Home Page";
            break;
    }
    return (
        <header className='bg-white-900 p-8'>
            <h1 className='text-3xl text-3xl font-bold mb-2'>{currentPage}</h1>
        </header>
    );
};

export default Header;