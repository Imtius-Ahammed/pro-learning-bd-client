import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import LeftSideCategory from "../LeftSideCategory/LeftSideCategory";

const Header = () => {
  const{user,providerLogOut} = useContext(AuthContext);

  const handlelogOut =()=>{
    providerLogOut()
    .then(()=>{})
    .catch(error=>{console.error(error)})
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <LeftSideCategory></LeftSideCategory>
            <li>
              <Link to='/'>Home</Link>
            </li>
            
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                FAQ
              
              </a>
          
            </li>
            <li>
              <a>BLOG</a>
            </li>
           
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">ProLearningBD</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        
        <ul className="menu menu-horizontal p-0">
        <li>
              <Link to='/'>Home</Link>
            </li>
          <li>
            <Link to='/courses'>Courses</Link>
          </li>
          <li tabIndex={0}>
            <a>
              FAQ
             
            </a>
          
          </li>
          <li>
            <a>Blog</a>
          </li>
         
        
        </ul>
        
      </div>
      <div className="navbar-end">
        { user?.uid?
          <>
         <span>{user?.displayName}</span>
         <button onClick={handlelogOut} className="btn">Log Out</button>

          </>
          :
          <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          </>
        }
        {
          user?.photoURL ?
          <img style={{height:'30px'}} src={user?.photoURL} alt="" />:<FaUser></FaUser>
        }
      </div>
     
    </div>
  );
};

export default Header;
