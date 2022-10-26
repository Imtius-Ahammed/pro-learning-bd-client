import React from "react";
import {FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const CourseSummaryCard = ({courses}) => {
  const {title,image_url,details,rating,_id} = courses;
  return (
    <div>
      <div className="card container mx-auto items-center w-11/12 bg-base-100  my-8 border border-sky-100 shadow-xl shadow-info ">
        <figure>
          <img className="w-full rounded-lg" src={image_url} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-white font-bold">
            {title}
            <div className="badge badge-secondary"><FaStarHalfAlt className="text-black mr-1"></FaStarHalfAlt> {rating.number}</div>
          </h2>
          {
            details.length> 200?
            <p>{details.slice(0,150)+'...'}</p>:
            <p className="text-blue-400">{details}</p>
            
          }
          <div className="card-actions justify-end">
           
            
            <div className="badge badge-outline p-5 shadow-md hover:bg-violet-700 hover:text-white text-white shadow-success"><Link  to={`/coursesdetails/${_id}`}>Get Premium Access</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
