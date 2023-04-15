import React from 'react'
import Navbar from './Navbar';
import Contacts from './Contacts';
import Search from './Search'

export default function LeftSlideBar() {
  return (
    <div className='slidebar'>
      <Navbar/>
      <Search />
      <Contacts/>
    </div>
  )
}
