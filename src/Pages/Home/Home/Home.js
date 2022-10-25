import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const allcourses = useLoaderData();
  return (
    <div>
      <h1>All Courses Home: {allcourses.length}</h1>
      
    </div>
  );
};

export default Home;
