import React from 'react';
import logo from './logo1.png';

function Sidebar() {

  return(
    <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="sidebar-heading"><img src={logo} width="200" alt=""/></div>
      <div className="list-group list-group-flush">

        <a href="#" className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-home mr-2"></i> Dashboard</a>
        <a href="#" className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-users mr-2"></i> Clientes</a>
      </div>
    </div>
  );

}

export default Sidebar;
