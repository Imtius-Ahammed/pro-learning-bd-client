
import {  useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';



const Category = () => {
  const categoryCourse =  useLoaderData();
  console.log(categoryCourse);
  return (
    <div>
      <h2 className='bg-violet-700  p-3 rounded-lg text-sm text-white lg:text-3xl container mx-auto items-center w-11/12'>This is Category: {categoryCourse.length}</h2>
      
      
   
      {
        categoryCourse.map(courses => <CourseSummaryCard key={courses._id} courses={courses}></CourseSummaryCard>)
       }
     
    </div>
  );
};

export default Category;