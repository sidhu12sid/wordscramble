import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
     <nav>
        <div className="flex items-center justify-between p-4 bg-blue-400 text-white"> 
        <Link to="/"> <img src={Logo} alt="logo" className='w-15 h-15'/></Link>
        </div>
     </nav>
    </>
  )
}

export default Header
