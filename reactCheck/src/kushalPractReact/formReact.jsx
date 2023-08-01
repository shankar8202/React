// import React from 'react'

import { useState } from "react"

function FormReact() {

  const[data,setData]=useState({
  
  })


    function handleChange(e){
        // console.log(e)
        const{name,value}=e.target


        setData((pre)=>({
      ...pre,[name]:value
        }))

    }
    function handleSubmit(){
    console.log(data)
    }
  return (
    <div>
     <input type="text" name="kushal"   onChange={handleChange}  />
     <input type="password" name="shankar"   onChange={handleChange} />
     <button  onClick={handleSubmit} >submit</button>

    </div>
  )
}

export default FormReact
