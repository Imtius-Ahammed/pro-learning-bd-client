import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails/CoursesDetails";
import Home from "../../Pages/Home/Home/Home";


export const routes = createBrowserRouter([
 {
  path:'/',
  element:<Main></Main>,children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/courses/:id',
      element:<Courses></Courses>
    },
    {
      path:'/coursesdetails/:id',
      element:<CoursesDetails></CoursesDetails>
    }

  ]
 }

])