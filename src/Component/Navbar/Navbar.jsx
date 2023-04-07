import React from 'react'
import './Navbar.css'
import logo from '../../Images/navimages/image 1.png'
import info from '../../Images/navimages/Info.png'
import vector1 from '../../Images/navimages/Vector-1.png'
import vector2 from '../../Images/navimages/Vector-2.png'
import vector from '../../Images/navimages/Vector.png'






const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <div className='nav_option'>
          <a href=""><img src={vector} alt="nav" /> Cart</a>
          <a href=""><img src={info} alt="nav" /> About Us</a>
          <a href=""><img src={vector2} alt="nav" /> Contact Us</a>
          <a href=""><img src={vector2} alt="nav" /> Sign in</a>
        </div>
    </div>
  )
}

export default Navbar