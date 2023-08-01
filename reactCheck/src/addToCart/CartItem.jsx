import React, { useEffect, useState } from 'react'

function CartItem({ProductId}) {
const [selectedItem,setSelectedItem]=useState([]);
    function Fetch2(){
        fetch(`https://fakestoreapi.com/products/${ProductId}`).then((items)=>items.json()).then((items2)=>setSelectedItem(items2))
    }
    useEffect(()=>{
  Fetch2()
    },[selectedItem])
  return (
    <div>
      {/* <p >{selectedItem.map((data)=>{
        return  (
            <div key={data.id}>
             <div>{data.title}</div>
             <img  height={300} width={300} style={{objectFit:'fill'}} src={data.image} alt="" /> 
             <div>{data.price}</div>


            </div>
        )
      })}</p> */}

      {console.log(selectedItem)}
    </div>
  )
}

export default CartItem
