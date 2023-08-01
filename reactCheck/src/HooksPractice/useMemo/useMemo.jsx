import  { useMemo, useState } from 'react'

function UseMemoPrac() {
    const [add,setAdd]=useState(0)
    const [substract,setSubstract]=useState(100)
    
  let UseUsememo =useMemo(          //if im not use usememo it also run when i substract anything even nothing is related to substarct function
    function multiplay(){
        console.log("multi func")
     return add*10
     
    },[add]
  )

  return (
    <div>
      <button onClick={()=>setAdd(add+1)} >add</button>
      <p>{add}</p>
      <div>muliplay function : {UseUsememo}</div>
      <button  onClick={()=>setSubstract(substract-1)} >substract</button>
      <p>{substract}</p>
    </div>
  )
}

export default UseMemoPrac
