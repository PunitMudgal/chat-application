import React from 'react'
import '../styles/message.css';
import avatar from '../images/user.jpg'

export default function Message() {
  return (
    <div className='message sender'>
      <div className='message-user-info'>
      <img className='box-shadow3' src={avatar} alt="avatar" />
      <span>Just Now</span>
    </div>
    <div className="message-content">
      <p>Hello punit</p>
      <img className='box-shadow3' src={avatar} alt="sentImage" />
    </div>
    </div>
  )
}
