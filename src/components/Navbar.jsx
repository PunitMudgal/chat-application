import React from 'react';
import avatar from '../images/user.jpg'
import { AuthUser } from '../context/AuthContext';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const {logOut,user} = AuthUser()
  const navigate  = useNavigate();

  const handleLogout = () => {
    try{
      logOut();
      navigate('/')
    }
    catch(error){
      console.log(error);
    }
  }
  console.log(user)

  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <p>That's App</p>
        <div className='navbar-userDetails'>
          <img src={user.photoURL} alt="avatar" />
          <p>{user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
