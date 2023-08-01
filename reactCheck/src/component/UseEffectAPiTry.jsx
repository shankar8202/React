import  { useEffect, useState } from 'react'

function UseEffectAPiTry() {
   const[data,setData]=useState([])

   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`).then((res)=>res.json()).then((res2)=>setData(res2))
   },[])

  return (
    <div>
      <div>{data.map((items)=>{
    return(
     <>
        <p>{ items.id}</p>
        <p>{items.title}</p>
        <img src={items.image} alt="" />
    
     </>
       )
      })}</div>
    </div>
  )
}

export default UseEffectAPiTry
