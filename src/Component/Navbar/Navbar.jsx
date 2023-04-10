import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../Images/navimages/image 1.png'
import info from '../../Images/navimages/Info.png'
import vector1 from '../../Images/navimages/Vector-1.png'
import vector2 from '../../Images/navimages/Vector-2.png'
import vector from '../../Images/navimages/Vector.png'






const Navbar = () => {

  let menu_option = useRef(null)
  let [state,setstate] = useState(false)

  function menu(e) {
    if (!state) {
      menu_option.current.style.display = 'flex'
      setstate(true)
    } else {
      menu_option.current.style.display = 'none'

      setstate(false)

    }

  }

  return (
    <div className='navbar'>
      <img src={logo} alt=""  className='logo'/>
      <div className='nav_option' ref={menu_option}>
        <a href=""><img src={vector} alt="nav" />Cart</a>
        <a href=""><img src={info} alt="nav" />About Us</a>
        <a href=""><img src={vector2} alt="nav" />Contact Us</a>
        <a href=""><img src={vector2} alt="nav" />Sign in</a>
      </div>
      <h1 onClick={menu} className='hamburger' style={{ fontSize: '35px' }}>{!state?<i class="bi bi-list"></i>:<i class="bi bi-x"></i>}</h1>
    </div>
  )
}

export default Navbar