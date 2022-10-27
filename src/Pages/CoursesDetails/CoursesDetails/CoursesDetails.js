import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef('');

const CoursesDetails = () => {
  const course = useLoaderData();
  const { title, image_url, details, category_id,rating } = course;
  return (
    
    <div className="container mx-auto items-center w-11/12 rounded-2xl shadow-xl shadow-success">
      
      <div className="flex justify-end m-2 ">
      <Pdf targetRef={ref} filename={title}>
        {({ toPdf }) => <button className="btn btn-secondary hover:bg-info hover:text-black hover:shadow-lg hover:shadow-success" onClick={toPdf}>Download Pdf</button>}
      </Pdf>
      </div>

      <h1 className="bg-sky-400 text-sm p-3 m-3 lg:text-3xl rounded-lg"> Course Title: {course.title}</h1>
      
      <div ref={ref} className="card card-compact w-full bg-base-100 shadow-xl">
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
              <button className="btn btn-success mx-4">Related Courses</button>
            </Link>
            <Link to='/checkout'><button className="btn btn-primary">Enroll</button></Link>
           </div>
           
           
            
              
            
            </div>
          </div>
        </div>
      </div>

      <div className="stats bg-violet-800 text-white stats-horizontal shadow w-full">
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
