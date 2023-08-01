import React, { useCallback, useState } from 'react'

function UseCallbackPrac() {
     const [num,setNum]=useState(0);
   
     const [lavaris,setLavaris]=useState(0)
      
     function handleAdd(){
        setNum(num+1)
       }
     function handleSub(){
        setNum(num-1)
     }
   
  
  let UseCall =useCallback(()=>{
    // function lavarisPdaHua (){
    //     console.log("hi")
    //   }
    //   lavarisPdaHua()
  },[]);
  UseCall;


  return (
    <div>
      <button onClick={handleAdd} >add</button>
      <button onClick={handleSub} >Substract</button>
     
      <h1>{num}</h1>
    </div>
  )
}

export default UseCallbackPrac
