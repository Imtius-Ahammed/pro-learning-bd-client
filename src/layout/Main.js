import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
  return (
   <div>
     <Header></Header>
    <div className='grid grid-cols-12 container mx-auto'>
    <div className='col-span-4 gap-4  border'><LeftSideNav></LeftSideNav></div>
     <div className='col-span-8 gap-4  border border-red-400'> <Outlet></Outlet></div>
    </div>
   
   </div>
  );
};

export default Main;