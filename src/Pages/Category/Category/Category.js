import React, { useEffect, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
  const categoryCourse =  useLoaderData();
  console.log(categoryCourse);
  return (
    <div>
      <h2>This is Category: {categoryCourse.length}</h2>

       {
        categoryCourse.map(courses => <CourseSummaryCard key={courses._id} courses={courses}></CourseSummaryCard>)
       }
    </div>
  );
};

export default Category;