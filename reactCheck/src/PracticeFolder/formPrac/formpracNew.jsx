import React, { useState } from 'react'

function FormpracNew() {
    const [data,setData]=useState({
        name:"",
        date:"",
        password:""
    })
    function handleChange(e){
        e.preventDefault()
        const{name,value}=e.target
       setData((pre)=>({
    ...pre,[name]:value
   
       }))
    }
    function handleSubmit(){
        console.log(data)
        setData({
            name:"",
            date:"",
            password:""
        })
    }
  return (
    <div>
      <input onChange={handleChange} type="text" name='name' value={data.name} />
      <input onChange={handleChange} type="date" name='date' value={data.date} />
      <input onChange={handleChange} type="password" name='password' value={data.password}  />
      <p>{data.name}</p>
      <button onClick={handleSubmit}>add</button>
    </div>
  )
}

export default FormpracNew
