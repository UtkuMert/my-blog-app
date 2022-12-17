import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h2>Login</h2>
      <form>
        <input required type="text" placeholder="Enter your username" />
        <input required type="email" placeholder="Enter your email" />
        <input required type="password" placeholder="Enter your password" />
        <button>Login</button>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register