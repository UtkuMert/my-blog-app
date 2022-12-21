import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">logo</div>
        <div className="categories">
          <Link className="link" to="/?cat=football">
            Football
          </Link>
          <Link className="link" to="/?cat=cinema">
            Cinema
          </Link>
          <Link className="link" to="/?cat=Technology">
            Technology
          </Link>
          <span>{currentUser?.userName}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="login">
              Login
            </Link>
          )}
          <span>
            <Link to="/post">Post</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
