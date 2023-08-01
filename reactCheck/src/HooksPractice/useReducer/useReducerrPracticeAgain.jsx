// import React from 'react'

import { useReducer } from "react"

const reducer=( state,action)=>{
    //   console.log(action)
    switch (action.type){
         case("add"):return {value: state.value + 1}
         case("sub"):return {value: state.value-1}
    }
}


function UseReducerrPracticeAgain() {

    const[state,dispatch]=useReducer(reducer,{value:0})

    function increament(){
      
        dispatch({type:"add"})
    }
    function decreament(){
        dispatch({type:"sub"})
    }
  return (
    <div>
        <p>{state.value}</p>
      <button onClick={increament} >add</button>
      <button onClick={decreament} >substract</button>
    </div>
  )
}

export default UseReducerrPracticeAgain
