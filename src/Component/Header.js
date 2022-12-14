import React, { useState } from 'react';
import Li from './Li';
// import RoundImg from './RoundImg'
import { Link } from "react-router-dom";

const Header = () => {
  
  
  return (
    <>
    <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
    
          <h1 className="logo mr-auto"><a href="index.html"><span>Job_</span>_Update</a></h1>
         
         <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
    
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li ><a href='/'>Home</a></li>
              <li><a href='news'>Jobs</a></li>
              <li className="drop-down"><a href=''>About</a>
                <ul>
                  <li><a href=''>About Us</a></li>
                  <li><a href=''>Team</a></li>
                  <li><a href=''>Testimonials</a></li>
                  
                </ul>
              </li>
              <li><a href=''>Contact</a></li>
    
            </ul>
          </nav>
    
          <div className="header-social-links">
            <a href='' className="twitter"><i className="icofont-twitter"></i></a>
            <a href='' className="facebook"><i className="icofont-facebook"></i></a>
            <a href='' className="instagram"><i className="icofont-instagram"></i></a>
            <a href='' className="linkedin"><i className="icofont-linkedin"></i></a>
          </div>
    
        </div>
      </header>
    </>
  )
}

export default Header