import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
        <h1>All Course Categories: {categories.length}</h1>
      <div>
        {categories.map((category) => (
          <p key={category.id} category={category}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
      
    </div>
  );
};

export default LeftSideCategory;