import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

class App extends Component {

  componentDidMount(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
   }

   render() {
     return (
       <div className="d-flex" id="wrapper">
         <Sidebar/>

         <div id="page-content-wrapper">
           <Navbar/>
           <div className="container-fluid">
             <Form/>

           </div>

         </div>
       </div>
     );
   }

}

export default App;
