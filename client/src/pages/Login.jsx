import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Enter your password" />
        <button>Login</button>
        <span>Create an account <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login