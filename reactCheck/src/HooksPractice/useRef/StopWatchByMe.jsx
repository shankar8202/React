import  { useRef, useState } from 'react'

function StopWatchByMe() {
   
    const[timer,setTimer]=useState(null)
    let ref=useRef()
   
     function start(){
        if(ref.current){
            clearInterval(ref.current)
        }
       ref.current=setInterval(()=>{
      setTimer((timer)=>timer+1)
       },100)
       console.log(ref.current)
     }


     function paush(){
    clearInterval(ref.current)
     }

     
     function reset(){
    setTimer(0)
    clearInterval(ref.current)
     }


  return (
    <div>
        <p>{timer}</p>
     
      <button onClick={start} >start</button>

      <button onClick={paush} >paush</button>
      <button onClick={reset} >reset</button>
    </div>
  )
}

export default StopWatchByMe
