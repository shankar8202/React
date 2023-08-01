// import React from 'react'

import { useMemo, useState } from "react"

function Usememopract() {
    const [add,setAdd]=useState(0)
    const [substract,setSubstract]=useState(100)
    
          //if im not use usememo it also run when i substract anything even nothing is related to substarct function
    let UsemamoFuc=useMemo(
        function multiplay(){
            console.log("multi func")
         return add*10
         
        },[add]
    )

  return (
    <div>
      <button onClick={()=>setAdd(add+1)} >add</button>
      <p>{add}</p>
      <div>muliplay function : {UsemamoFuc}</div>
      <button  onClick={()=>setSubstract(substract-1)} >substract</button>
      <p>{substract}</p>
    </div>
  )
}

export default Usememopract
