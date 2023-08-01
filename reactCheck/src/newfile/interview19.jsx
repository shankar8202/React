// import React from 'react'

import { useRef } from "react"

function Interview19() {
   
    const ref1=useRef("blank")
    function handleevent(){
        ref1.current.focus();
        console.log(ref1)
    }
  return (
    <div>
        <input type="text" ref={ref1}  />
        {/* <p>{ref1.current.value}</p> */}
        
      <button onClick={handleevent}>hit me</button>
    </div>
  )
}

export default Interview19
