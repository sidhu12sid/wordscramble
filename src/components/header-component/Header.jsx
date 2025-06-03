import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
     <nav>
        <div className="flex items-center justify-center shadow-md"> 
        <Link to="/"> <img src={Logo} alt="logo" className='w-20 h-20'/></Link>
        </div>
     </nav>
    </>
  )
}

export default Header
