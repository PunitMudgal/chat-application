import React, { useState } from 'react';
import '../styles/signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from '../context/AuthContext';

export default function Login() {
  const {logIn} = AuthUser();
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const email = e.target[0].value;
    const password = e.target[1].value;

    e.preventDefault()
    try{
      setError('')
      logIn(email,password);
      navigate('/home')
    }
    catch(error){
      setError(error.message);
      console.log(error)
    }
  }

  return (
    <div className='signup-full'>
    <div className='signup-content box-shadow3'>
        <span>That's App</span>
        <span>Login</span>
       {error? <p className='error-message'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' name="name" required />
            <input type="password" placeholder='Password' required />
            <button type='submit' className='signup-btn'>Sign up</button>
        </form>
        <p>New user? <Link to="/">Sign up</Link></p>
    </div>
</div>
  )
}
