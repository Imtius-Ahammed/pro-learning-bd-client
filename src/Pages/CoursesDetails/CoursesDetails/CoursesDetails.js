import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CoursesDetails = () => {
  const course = useLoaderData();
  const {title,image_url,details,category_id}=course;
  return (
    <div>
      <h4>THis is cOurse Details :{course.title}</h4>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
           <Link to={`/category/${category_id}`}> <button className="btn btn-primary">Related Courses</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
