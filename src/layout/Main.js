
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer/Footer';


import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
  return (
   <div>
     <Header></Header>
     
    <div className='grid grid-cols-1 md:grid-cols-12 container mx-auto'>
      
    <div className='hidden md:block md:col-span-4 col-span-1 gap-4 '><LeftSideNav></LeftSideNav></div>
    
     <div className='col-span-8 gap-4'> <Outlet></Outlet></div>
    </div>
   <div>
    <Footer></Footer>
   </div>
   
   </div>
  );
};

export default Main;