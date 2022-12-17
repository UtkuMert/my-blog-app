import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className="logo">logo</div>
       <div className='categories'>
          <Link className='link' to="/?cat=football">Football</Link>
          <Link className='link' to="/?cat=cinema">Cinema</Link>
          <Link className='link' to="/?cat=Technology">Technology</Link>
          <span>Utku</span>
          <span>Logout</span>
          <span>
            <Link to="/post">Post</Link>
          </span>
       </div>
      </div>
    </div>
  )
}

export default Navbar