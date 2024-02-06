import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: '/',
            element:<Home/>
        }
      ]
    },
]);