import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CoursesDetails = () => {
  const course = useLoaderData();
  const { title, image_url, details, category_id,rating } = course;
  return (
    <div className="container mx-auto items-center w-11/12 rounded-2xl shadow-xl shadow-success">
      <h1 className="bg-violet-700 text-sm p-5 text-white lg:text-3xl rounded-lg"> Course Title: {course.title}</h1>
      
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <p>{details}</p>
          <div className=" ">
            
            <div className="flex justify-between items-center">
              
            <div className="badge badge-secondary"><FaStarHalfAlt className="text-black mr-1"></FaStarHalfAlt>{rating.number} {rating.badge}</div>
           <div>
           <Link to={`/category/${category_id}`}>
              {" "}
              <button className="btn btn-primary">Related Courses</button>
            </Link>
           </div>
           
           
            
              
            
            </div>
          </div>
        </div>
      </div>

      <div className="stats bg-violet-800 text-white stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
