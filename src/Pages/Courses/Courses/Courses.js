import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Courses = () => {
  const allCourses = useLoaderData();
  return (
  
       <div>
      <h1>All Courses Home: {allCourses.length}</h1>
      {
        allCourses.map(courses=><CourseSummaryCard key={courses._id} courses={courses}></CourseSummaryCard>)
      }
      
    </div>
   
  );
};

export default Courses; 
    