import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import LeftSideCategory from "../LeftSideCategory/LeftSideCategory";
import logo from '../../../Assets/logo/logo.png'

const Header = () => {
  const { user, providerLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    providerLogOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar mb-8  lg:text-2xl text-white bg-base-300 lg:px-40">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-2 shadow-lg shadow-info bg-base-100 rounded-box w-52"
          >
            <LeftSideCategory></LeftSideCategory>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/faq" className="justify-between">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case lg:text-xl shadow-md shadow-warning"
        >
         <img className="rounded-full" style={{height:'40px'}} src={logo} alt="" />  ProLearningBD
        </Link>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input type="checkbox" className="toggle" />
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 rounded-2xl shadow-md shadow-info">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user?.uid ? (
          <div className="flex">
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
              <button className="btn ">   {user?.photoURL ? (
          <img
            style={{ height: "40px" }}
            className="rounded-full"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <FaUser></FaUser>
        )}</button>
            </div>
            <button
              onClick={handleLogOut}
              className="btn shadow-md shadow-success bg-black hover:bg-green-200 text-white hover:text-black font-bold mx-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <Link
              className="btn rounded-xl shadow-md shadow-info  text-white font-bold hover:bg-violet-700 mx-2"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn rounded-xl shadow-md shadow-info  text-white font-bold hover:bg-violet-700 mx-2"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
     
      </div>
    </div>
  );
};

export default Header;
