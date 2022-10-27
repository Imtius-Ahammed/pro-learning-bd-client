import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://pro-learning-bd-server.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1>All Course Categories: {categories.length}</h1>
      <div>
        {categories.map((category) => (
          <p
            className=" bg-gray-700 hover:shadow-lg hover:shadow-info  p-3 m-3 text-sm lg:text-3xl text-white hover:text-black rounded-xl hover:bg-violet-700"
            key={category.id}
            category={category}
          >
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideCategory;
