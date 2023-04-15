import React from 'react'
import {FaSearch} from 'react-icons/fa'
import avatar from '../images/user.jpg'
import '../styles/search.css'

function Search() {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="search" placeholder='Search User' />
        <FaSearch size={25} />
      </div>
      <div className="search-result">
        <img src={avatar} alt="avatar" />
        <div className='search-result-userName'>
          <p>Punit Sharma</p>
        </div>
      </div>
    </div>
  )
}

export default Search