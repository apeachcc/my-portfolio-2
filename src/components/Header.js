import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className="navbar">
            <Link to="/">Home</Link>
            <Link to="Project">Project</Link>
            <Link to="Contact">Contact</Link>
        </header>
    // <header className="navbar">
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/Project">Project</Link>
    //     </li>
    //     <li>
    //       <Link to="/Contact">Contact</Link>
    //     </li>
    //   </ul>
    // </header>
    );
}

export default Header;