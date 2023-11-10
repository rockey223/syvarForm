import React from 'react'
import Image from 'next/image'
import logo from './assets/images/logo.jpg'
import './navbar.css'
const Navbar = () => {
  return (
    <main>
    <div className="navbar">
        <div className="navbar-content">
            <div className="navbar-logo">
                <Image src={logo} alt='Syvar-technology' className='navbar-logo-image' height={100} width={100}/>

                
            </div>
            <div className="navbar-brand">
                <div className="navbar-brand-name">Syvar Technology</div>
                <div className="navbar-brand-tag">Developing and integrating 0 and 1</div>
            </div>

        </div>
    </div>
    
    </main>
  )
}

export default Navbar