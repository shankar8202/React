import { useState } from 'react'
import Child from './child'
function Parent() {
    const [input,setInput]=useState()
    function parentFunct(dataFromChild){
        setInput(dataFromChild)
    }
  return (
    <div>
      <Child  callFunc={parentFunct} />
      <p>{input}</p>
    </div>
  )
}

export default Parent
