import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle,FaGithub,FaFacebook,FaTelegram,FaWhatsapp,FaTwitter,FaLinkedin } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import LeftSideCategory from "../LeftSideCategory/LeftSideCategory";

const LeftSideNav = () => {

 
  return (
    <div>
    
    
      <LeftSideCategory></LeftSideCategory>
      <div className="btn-group btn-group-vertical">
        <button className="btn btn-active mb-2"> <FaGoogle></FaGoogle>Login With Google</button>
        <button className="btn"> <FaGithub> </FaGithub> Login With GitHub</button>
        
      </div>
      <div>
        <h5 className="text-3xl">Find Us On</h5>
      <div className="btn-group btn-group-vertical">
       <button className="btn mb-2 w-80 btn-active"><FaFacebook></FaFacebook> Facebook</button>
       <button className="btn mb-2 w-80"><FaTwitter></FaTwitter> Twitter</button>
       <button className="btn mb-2 w-80"><FaTelegram></FaTelegram> Telegram</button>
       <button className="btn mb-2 w-80"><FaWhatsapp></FaWhatsapp>WhatsApp</button>
       <button className="btn mb-2 w-80"><FaLinkedin></FaLinkedin> Linkedin</button>
       
     </div>
      </div>
      <Carousel></Carousel>
      
      
    </div>
   
  );
};

export default LeftSideNav;
