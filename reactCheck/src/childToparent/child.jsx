import { useState } from 'react'

function Child({callFunc}) {
    const[data,setData]=useState()

    function changeFunc(e){
      setData(e.target.value)
      callFunc(data)
    }
  return (
    <div>
      <input type="text" onChange={changeFunc} />
    </div>
  )
}

export default Child
