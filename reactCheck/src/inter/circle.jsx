import  { useState } from 'react'


// creat a counter +hit button => create a circle with color green along with indicator , 
 // when i click => circle color should change as well as counter reduce 
function Circle() {
    const [circle ,setCircle] =useState(false)
    const [count ,setCount] =useState(0)
    const [color,setColor]=useState('gray')
 function handleCircle(){
   setCircle(true)
   setCount(count+1)

 }
 function circleChange(e){
   

    setCount(count-1)
    setColor(e.target.backgroundColor) 
 }
  return (
    <div>
      {circle &&  (<div  onClick={circleChange} style={{width:400,height:300 ,backgroundColor:(color?"green":'gray') ,borderRadius:200 }}> hello</div>)}  
      <button onClick={handleCircle} >Counter {count} </button>
    </div>
  )
}

export default Circle
