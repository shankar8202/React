// import React from 'react'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./about"
import Home from "./home"
import Contact from "./contact"


const routes =createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/contact',
        element:<Contact/>,
    },
    {
        path:'*',
        element:<div>there is no path</div>
    },
])
function CommonFunc() {

  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  )
}

export default CommonFunc


// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import About from './about';
// import Home from './home';

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   },
//   {
//     path: '*',
//     element: <div>There is no path</div>,
//   },
// ]);

// function CommonFunc() {
//   return (
//     <div>
//       <RouterProvider router={routes}>
//         {/* Render your app components here */}
//       </RouterProvider>
//     </div>
//   );
// }

// export default CommonFunc;
