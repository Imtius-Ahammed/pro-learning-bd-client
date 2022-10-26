import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,FaUserAlt,FaRegistered
} from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import LeftSideCategory from "../LeftSideCategory/LeftSideCategory";

const LeftSideNav = () => {
  return (
    <div>
      <Carousel></Carousel>
      <LeftSideCategory></LeftSideCategory>

      <div>
        <h5 className="text-3xl font-bold mt-5">Find Us On</h5>
        <div className="btn-group btn-group-vertical container mx-auto p-3 items-center">
          <button className="btn gap-2 mb-2 w-full btn-active">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn gap-2 mb-2 w-full ">
            <FaTwitter></FaTwitter> Twitter
          </button>
          <button className="btn gap-2 mb-2 w-full ">
            <FaTelegram></FaTelegram> Telegram
          </button>
          <button className="btn gap-2 mb-2 w-full ">
            <FaWhatsapp></FaWhatsapp>WhatsApp
          </button>
          <button className="btn gap-2 mb-2 w-full ">
            <FaLinkedin></FaLinkedin> Linkedin
          </button>

          <Link to='/login'><button className="btn gap-2  mb-2 w-80 bg-sky-400 text-violet-800 font-bold ">
            <FaUserAlt></FaUserAlt> Login
          </button></Link>
          <Link to='/Register'><button className="btn bg-sky-400 text-violet-800 font-bold gap-2 mb-2 w-80 ">
            <FaRegistered></FaRegistered> Register
          </button></Link>
         
          
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
