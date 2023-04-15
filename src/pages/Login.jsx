import React from 'react';
import '../styles/signup.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='signup-full'>
    <div className='signup-content box-shadow3'>
        <span>That's App</span>
        <span>Login</span>

        <form>
            <input type="email" placeholder='Email' name="name" required />
            <input type="password" placeholder='Password' required />
            <button className='signup-btn'>Sign up</button>
        </form>
        <p>New user? <Link to="/signup">Sign up</Link></p>
    </div>
</div>
  )
}
