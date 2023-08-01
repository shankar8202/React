import React, { useRef, useState } from 'react'

function StopwatchPrac() {
 const[time,setTime]=useState(null)
    let myref= useRef()
    // console.log(myref,"myref")
    

    function start(){
        if(myref.current){
            clearInterval(myref.current)
        }
        myref.current= setInterval(() => {
           

                setTime((time)=>time+1)
            
       
        // console.log(myref.current)
        
        }, 100); 
    }
   
    

    function Stop (){
      clearInterval(myref.current)
      
    }
  return (
    <div>
        <h1>{time}</h1>
      <button onClick={start}  >start   </button>
      <button  onClick={Stop}  >stop</button>
    </div>
  )
}

export default StopwatchPrac
