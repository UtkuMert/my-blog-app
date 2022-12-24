import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await login(inputs);
     
     navigate("/");
    } catch (err) {
      setErr(err?.response?.data?.message);
    }
  };
  return (
    <div className="auth">
     
      <form>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter your username"
          name="userName"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err &&<p>{err}</p>}
        <span>
          Create an account <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
