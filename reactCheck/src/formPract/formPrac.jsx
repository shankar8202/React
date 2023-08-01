import  { useState } from 'react'

function FormPrac() {
    const [data,setData] =useState({
     name:"",
     password:"",
     radio:"",
    });
    function handleChange(e){
       
        const{name,value}=e.target
        setData((pre)=>({
      ...pre,[name]:value
        }))
    }
    function handleClick(){
    console.log(data)
    }
  return (
    <div>
      <input type="text" placeholder='enter you name' name='name' onChange={handleChange}/>
      <input type="password" placeholder='password' name='password' onChange={handleChange} />
      <label >male</label>
      <input type="radio" name='radioMale'  onChange={handleChange}/>
      <label >female</label>
      <input type="radio" name='radioFemale' onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default FormPrac
