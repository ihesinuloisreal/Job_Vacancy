import React from 'react'
import Li from './Li'
import RoundImg from './RoundImg'


const Header = () => {
  return (
    <>
    <header class="d-flex justify-content-center py-3 ">
      <ul class="nav nav-pills">
        <Li text = 'Home' to='/Home'/>
        <Li text = 'About' to='/About'/>
        <Li text = 'Contact' to='/Contact'/>
        <Li text = 'Login' to='/Login'/>
        {/* <RoundImg width='50' height='50'/> */}
      </ul>
    </header>
    </>
  )
}

export default Header