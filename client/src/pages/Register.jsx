import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const Register = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [err,setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e =>{
    e.preventDefault();
    try {
     await axios.post("/auth/register",inputs)
     navigate("/login");
    } catch (err) {
      setErr(err?.response?.data?.message)
    }
    
  }

  return (
    <div className="auth">
      <h2>REGISTER</h2>
      <form>
        <input
          required
          type="text"
          placeholder="Enter your username"
          name="userName"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err &&<p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
