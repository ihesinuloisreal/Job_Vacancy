import React from 'react'
import Li from './Li'
// import RoundImg from './RoundImg'
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header class="d-flex justify-content-center py-3 bg-dark fixed-top">
      <ul class="nav nav-pills">
        
        <Li text='Home' to="/"/>
        <Li text='About' to="/about"/>
        <Li text='Contact' to="/contact"/>
      
      

        {/* <RoundImg width='50' height='50'/> */}
      </ul>
    </header>
    </>
  )
}

export default Header