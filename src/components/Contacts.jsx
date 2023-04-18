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
          <p>JAI BAJRANG BALI</p>
        </div>
      </div>
      <div className="contact-card">
        <img src={avatar} alt="avatar" />
        <div className='contact-card-userName'>
          <p>RAM</p>
          <p>JAI SHRI RAM</p>
        </div>
      </div>
      <div className="contact-card">
        <img src={avatar} alt="avatar" />
        <div className='contact-card-userName'>
          <p>SHYAM</p>
          <p>JAI SHRI SHYAM</p>
        </div>
      </div>
    </div>
  )
}
