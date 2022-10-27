import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Courses = () => {
  const allCourses = useLoaderData();
  return (
  
       <div className='container mx-auto items-center w-11/12' >
      <h1 className='bg-sky-400 text-sm lg:text-3xl  rounded-lg p-3'>All Courses Home: {allCourses.length}</h1>
      {
        allCourses.map(courses=><CourseSummaryCard key={courses._id} courses={courses}></CourseSummaryCard>)
      }
      
      
    </div>

   
  );
};

export default Courses; 
    