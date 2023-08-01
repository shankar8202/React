import React, { useState } from 'react'

function GioLocationTry() {
    const[data,setData]=useState("");
    function getPosition(){
        setData(
            navigator.geolocation.getCurrentPosition((position)=> setData(position.coords.latitude,console.log(position,"position")))   //position rhta hi h 
        )
        console.log(data)
    }
  return (
    <div>
      <button onClick={getPosition}>get Location</button>
    </div>
  )
}

export default GioLocationTry
