// import React from 'react'

import { useState } from "react"

function RollNumPract() {
    const[name,setName]=useState("")
    const[roll,setRoll]=useState();
    const[final,setFinal]=useState([]);
    
    function handleSubmit(){
        let parse=parseInt(roll);
        let oddEven=parse%2===0
        let final=oddEven?"even":"odd"
        let obj={
            name:name,
            roll:roll,
            final:final
        }
        setFinal((pre)=>[...pre,obj]);
        setName('');
        setRoll('');
       
    }
  return (
    <div>
      <input type="text" placeholder="enter Name" onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder="enter Name" onChange={(e)=>setRoll(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    <ul>
        {final.map((data,i)=>{
            return <li key={i}>{data.name}{data.roll} {data.final}</li>
        })}
    </ul>
    </div>
  )
}

export default RollNumPract
