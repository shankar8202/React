// import React from 'react'
import B from "./b"

import { createContext, useState } from "react"

export let Mycontext=createContext()
function A() {
    const [input] =useState("shankar")
  return (
    <Mycontext.Provider value={input}>
      <B/>
    </Mycontext.Provider>
  )
}

export default A
