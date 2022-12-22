import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { BiUser, BiPencil, BiHome, BiLogIn } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <BiHome size={32} />
          </Link>
          <BiUser size={24} /> <span>{currentUser?.userName}</span>
        </div>
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
          
          <span>
            <Link className="link" to="/post">
              <BiPencil />
              Post
            </Link>
          </span>

          {currentUser ? (
            <span onClick={logout}>
              <FiLogOut /> Logout
            </span>
          ) : (
            <Link className="link" to="login">
              <BiLogIn />Login
            </Link>
          )}
 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
