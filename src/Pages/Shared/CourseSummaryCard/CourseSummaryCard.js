import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CourseSummaryCard = ({ courses }) => {
  const { title, image_url, details, rating, _id } = courses;
  return (
    <div>
      <div
        ref={ref}
        className="card container mx-auto items-center w-11/12 bg-base-100  my-8 border border-sky-100 shadow-xl shadow-info "
      >
        <div className="p-2">
          <Pdf targetRef={ref} filename={title}>
            {({ toPdf }) => (
              <button
                className="btn btn-secondary hover:bg-info hover:text-black hover:shadow-lg hover:shadow-success"
                onClick={toPdf}
              >
                Download Pdf
              </button>
            )}
          </Pdf>
        </div>
        <figure>
          <img className="w-full rounded-lg" src={image_url} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {title}
            <div className="badge badge-secondary">
              <FaStarHalfAlt className="text-black mr-1"></FaStarHalfAlt>{" "}
              {rating.number}
            </div>
          </h2>
          <div>
            {details.length > 200 ? (
              <p>{details.slice(0, 150) + "..."}</p>
            ) : (
              <p className="text-blue-400">{details}</p>
            )}
          </div>
          <div className="card-actions justify-end">
            <div className="badge  p-5 shadow-md hover:bg-sky-400 hover:text-black shadow-success">
              <Link to={`/coursesdetails/${_id}`}>Enroll Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
