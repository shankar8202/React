// import React from 'react'

import { useState } from "react"

function Hoc2() {
    const [counter,setCounter]=useState(0)
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>add here : {counter}</button>
      <h1>{counter}</h1>
    </div>
  )
}

export default Hoc2
