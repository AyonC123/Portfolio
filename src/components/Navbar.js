import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './../App.css'

function Navbar() { 
  const [open, setOpen] = useState(false)
  
  const themeSwitcher = () => {
    document.body.classList.toggle('lightTheme');
    if (typeof window !== "undefined") {
      const theme = window.localStorage.getItem('KDV_THEME');
      window.localStorage.setItem(
        "KDV_THEME",
        !theme ? 'light' : theme === 'dark' ? 'light' : 'dark'
      );
    }
  }

  return (
    <div className='navbar'>
      <Link to='/'>
        <div className='title'>Ayon</div>
      </Link>
      <div className='links responsive'>
        <Link to='/skills' className='link'> 
          Skills
        </Link>
        <Link to='/projects' className='link'> 
          Projects
        </Link>
        <Link to='/contact' className='link'> 
          Contact
        </Link>
      </div>
      <FontAwesomeIcon icon={faMoon} className='icon responsive' onClick={themeSwitcher} />
      <div className='navbar mobile-nav'>
        {!open ? <FontAwesomeIcon icon={faBars} className='hamburger' onClick={() => setOpen(!open)}/> : <FontAwesomeIcon icon={faXmark} className='hamburger' onClick={() => setOpen(!open)}/>}
        {
        open && 
        <div className='mobile-items'>
          <FontAwesomeIcon icon={faMoon} className='icon mobile-hidden' onClick={themeSwitcher}/>
          <div className='links link-items'>
            <Link to='/' className='link link-item'>
              Home
            </Link>
            <Link to='/skills' className='link link-item'> 
              Skills
            </Link>
            <Link to='/projects' className='link link-item'> 
              Projects
            </Link>
            <Link to='/contact' className='link link-item'> 
              Contact
            </Link>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar
