import  { useEffect, useState } from 'react'

function UseEffectPrac() {
 const [items,setItems]=useState([])



    function Data(){
    
     fetch("https://fakestoreapi.com/products")
       .then((res)=>res.json()).then((data)=>setItems(data))
    }
   useEffect(()=>{
       Data()
        return ()=> Data()
        },[])
        console.log(items)
  return (
    <div key={items.id}>
       {items.title}
    </div>
  )
}

export default UseEffectPrac
