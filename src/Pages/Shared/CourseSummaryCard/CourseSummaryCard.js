import React from "react";
import {FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const CourseSummaryCard = ({courses}) => {
  const {title,image_url,details,rating,_id} = courses;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image_url} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-white font-bold">
            {title}
            <div className="badge badge-secondary"><FaStarHalfAlt className="text-black mr-1"></FaStarHalfAlt> {rating.number} {rating.badge}</div>
          </h2>
          {
            details.length> 200?
            <p>{details.slice(0,200)+'...'}<Link className="text-blue-500" to={`/coursesdetails/${_id}`}>Read More</Link></p>:
            <p className="text-blue-400">{details}</p>
            
          }
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
