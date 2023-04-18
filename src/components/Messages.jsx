import React from 'react'
import Message from './Message';
import '../styles/message.css';

export default function Messages() {
  return (
    <div className='messages'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}
