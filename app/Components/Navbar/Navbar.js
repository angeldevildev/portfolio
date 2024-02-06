import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
    <div className='nav-link-filled'>
        <div className='list'>
            <ul>
                <a href='#'><li className='nav-links-item active'>Home</li></a>
                <a href='#about'><li>About</li></a>
                <a href='#work'><li>Work</li></a>
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Navbar
