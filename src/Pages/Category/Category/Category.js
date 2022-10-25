import React, { useEffect, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';

const Category = () => {
  const course =  useLoaderData();
 
  return (
    <div>
      <h2>This is Category: {course.length}</h2>
       
    </div>
  );
};

export default Category;