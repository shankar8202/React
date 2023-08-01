import  { useCallback, useState } from 'react'
import UseCallback2 from './useCallback2'

function UseCallbackTry() {
const [number,setNumber]=useState(0)
let callbackFunc =useCallback(                 //it will catch the function
    function pass(){
       
    },[]
)
  return (
    <div>
        <UseCallback2   pass={callbackFunc}/>
        <p>number:- {number}</p>
      <button onClick={()=>setNumber(number+1)}>add</button>
    </div>
  )
}

export default UseCallbackTry
