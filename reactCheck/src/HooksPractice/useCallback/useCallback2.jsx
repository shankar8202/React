import  { memo } from 'react'

function UseCallback2(props) {
    console.log("hi im i render here ?")
    
  return (
    <div>
      hi im child {props.pass} 
    </div>
  )
}

export default memo(UseCallback2)
