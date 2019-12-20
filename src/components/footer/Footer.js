import React from 'react';
import logo from './footer1.png';

function Footer() {

  return(
    <footer className="navbar navbar-expand-lg navbar-light bg-light border-top">
      <div className="row">
        <div className="col-md-6">
          <p>ePayco © 2011 - 2019 todos los derechos reservados.</p>
        </div>
        <div className="col-md-6">
          <img src={logo} height="30"/>
        </div>
      </div>
    </footer>
  );

}

export default Footer;
