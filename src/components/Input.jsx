import React from 'react'
import '../styles/input.css'
import {FaPaperclip } from 'react-icons/fa'
import {BiImageAdd,BiSend} from 'react-icons/bi'

export default function Input() {
  return (
    <div className='input box-shadow3'>
      <input type="text" placeholder='Type Message...' />
      <div className='input-attachments'>
      <FaPaperclip size={27} style={{cursor: "pointer"}} />  
      <input type="file" style={{display: "none"}} id='file' />
      <label htmlFor="file">
        <BiImageAdd size={30} style={{cursor: "pointer"}} />
      </label>
      <BiSend size={30} style={{color: "green",cursor: "pointer"}}/>
      </div>
    </div>
  )
}
