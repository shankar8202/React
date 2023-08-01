import React from 'react'
import {creatBrowserRouter,RouterProvider} from 'react-router-dom'

const routes=creatBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/about",
        element:<About/>
    }
])



function CommonFuncCheck() {
  return (
    <div>
      <RouterProvider router={routes}>
      
      </RouterProvider>
    </div>
  )
}

export default CommonFuncCheck
