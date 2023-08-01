import React from 'react';
import ReactDOM from 'react-dom';
import Alpha from './a';
import Beta from './b';
import Gamma from './c';
import Hearder from './hearder';
import Footer from './footer';
import Homee from './Homee';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

let routerr = createBrowserRouter([
  {
    path: '/',
    element: <Common />,
    children: [
      {
        path: '/',
        element: <Homee />
      },
      {
        path: '/a',
        element: <Alpha />
      },
      {
        path: '/b',
        element: <Beta />
      }
    ]
  }
]);

function Common() {
  return (
    <div>
      <RouterProvider router={routerr}>
        <Hearder />
        <Outlet />
        <Footer />
      </RouterProvider>
    </div>
  );
}

export default Common
