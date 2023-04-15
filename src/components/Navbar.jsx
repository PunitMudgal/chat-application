import React from 'react';
import avatar from '../images/user.jpg'
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <p>That's App</p>
        <div className='navbar-userDetails'>
          <img src={avatar} alt="avatar" />
          <p>Punit Sharma</p>
          <button>Logout</button>
        </div>
      </div>
    </div>
  )
}
