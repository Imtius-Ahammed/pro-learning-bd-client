import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";

import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails/CoursesDetails";
import Home from "../../Pages/Home/Home/Home";


export const routes = createBrowserRouter([
 {
  path:'/',
  element:<Main></Main>,children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('http://localhost:5000/courses')
    },
    {
      path:'/category/:id',
      element:<Category></Category>,
      loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
      
    },
    {
      path:'/coursesdetails/:id',
      element:<CoursesDetails></CoursesDetails>,
     
    }

  ]
 }

])