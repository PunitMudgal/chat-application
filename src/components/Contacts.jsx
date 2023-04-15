import React from 'react'
import avatar from '../images/user.jpg'
import '../styles/contact.css'

export default function Contacts() {
  return (
    <div className='contact'>
       <div className="contact-card">
        <img src={avatar} alt="avatar" />
        <div className='contact-card-userName'>
          <p>Punit Sharma</p>
          <p>Hello punit, what's up</p>
        </div>
      </div>
      <div className="contact-card">
        <img src={avatar} alt="avatar" />
        <div className='contact-card-userName'>
          <p>Khushi Sharma</p>
          <p>Hello khushi, what's up</p>
        </div>
      </div>
      <div className="contact-card">
        <img src={avatar} alt="avatar" />
        <div className='contact-card-userName'>
          <p>dont know Sharma</p>
          <p>Hello man, what's up</p>
        </div>
      </div>
    </div>
  )
}
