// import { useContext } from "react"
import { Mycontext } from "./a"
// import React from 'react'
// let contxx =useContext()
function C() {
  return (
    <Mycontext.Consumer>
      {(value)=>{
        return (
            <h1>{value}</h1>
        )
       }}
    </Mycontext.Consumer>
  )
}

export default C
