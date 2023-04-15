import React from 'react'
import photo from '../images/pic-upload.png';
import '../styles/signup.css'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='signup-full'>
        <div className='signup-content box-shadow2'>
            <span>That's App</span>
            <span>SignUp</span>

            <form>
                <input type="text" placeholder='Name' name="name" required />
                <input type="email" placeholder='Email' name="name" required />
                <input type="password" placeholder='Password' required />
                <input style={{display: "none"}} type="file" />
                <label htmlFor="file">
                    <img src={photo} alt="input-file" />
                    Add Avatar
                </label>
                <button className='signup-btn'>Sign up</button>
            </form>
            <p>Already user? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}
