import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";

import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails/CoursesDetails";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login.js/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
  {

    path:'/',
    element:<Home></Home>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/blog',
    element:<Blog></Blog>
  },
  {
    path:'*',
    element:<div className="bg-red-500 p-10 text-4xl text-center font-bold text-white">This is error...<Link className= "btn bg-blue-700 text-white" to='/'>Go Back</Link></div>
  },

  
 {
  path:'/',
  element:<Main></Main>,children:[
   
    {
      path:'/courses',
      element:<Courses></Courses>,
      loader:()=>fetch('http://localhost:5000/courses')
    },
    {
      path:'/category/:id',
      element:<PrivateRoutes><Category></Category></PrivateRoutes>,
      loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
      
    },
    {
      path:'/coursesdetails/:id',
      element:<PrivateRoutes><CoursesDetails></CoursesDetails></PrivateRoutes>,
      loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
     
    },
 

  ]
 }

])