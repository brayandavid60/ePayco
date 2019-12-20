import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-4">
        <button className="btn btn-default" id="menu-toggle"><i className="fas fa-bars"></i></button>
    </nav>

  );

}

export default Navbar;
