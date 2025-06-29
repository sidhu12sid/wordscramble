import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
     <nav className='sticky top-0 z-50 bg-white flex items-center flex-col justify-center shadow-md'>
        <Link to="/"> <img src={Logo} alt="logo" className='w-20 h-20'/></Link>
     </nav>
    </>
  )
}

export default Header
