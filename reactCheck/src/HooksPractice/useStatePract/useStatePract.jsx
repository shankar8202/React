import React, { useState } from 'react'

function UseStatePract() {
    const[ data,setData]=useState({
        username:" ",
        password:" ",
        gmail: " "
    })
    function handleEvent(e){
    const{name,value}=e.target;
    setData((prevData) => ({
      
        ...prevData, 
        [name]: value
      }));
    }

    
    function submitFunc(e){
        e.preventDefault();
        console.log(data)
    }
  return (
    <div>
     <form onSubmit={submitFunc}>
     <input onChange={handleEvent} type="text" name='username' />
      <input onChange={handleEvent} type="password" name='password'  />
      <input onChange={handleEvent} type="gmail" name='gmail'  />
    <button type='submit'>submit</button>
     </form>
     
    </div>
  )
}

export default UseStatePract
