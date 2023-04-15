import React from 'react';
import LeftSlideBar from '../components/LeftSlideBar';
import Chat from '../components/Chat'
import '../styles/home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='home-container box-shadow'>
      <LeftSlideBar />
      <Chat />
      </div>
    </div>
  )
}
