// import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from "../home";
import About from "./about";
import Contact from './contact';
import { MyContextProvider } from './theme';
import { useEffect, useState } from 'react';

const router  = createBrowserRouter([
{
    path:'./',
    element:<Home/>
},
{

    path:'./contact',
    element:<Contact/>
},
{

    path:'./about',
    element:<About/>
},
{

    path:'*',
    element:   <div> no page founds</div>
},

])

function SubMain() {
    const [theme,setTheme]=useState(
        localStorage.getItem("savedTheme") || "light"
    )

function toggleTheme(){
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
}

useEffect(() => {
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  return (
  
    <>  
  <MyContextProvider value={theme}>

<div>
<button onClick={toggleTheme}>Toggle Theme</button> : {theme}
</div>


    <RouterProvider   router={router} />    


  </MyContextProvider>
  </>
  )
}

export default SubMain
