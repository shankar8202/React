import  { useEffect, useState } from 'react'
// import CartItem from './CartItem'
// import Navbar from './Navbar'
function AddToCart() {
    const [data,setData]=useState([])
    // const [id,setId]=useState("")
    function Fetch(){
        fetch("https://fakestoreapi.com/products").then((items)=>items.json()).then((items2)=>setData(items2))
    }
    useEffect(()=>{
  Fetch()
    },[])


    function handleClick(id){
console.log(id)
// setId(id)
    }
  return (
   <>
   {/* <Navbar/> */}

    <div style={{display:'flex',justifyContent:'center ' , flexWrap:'wrap', alignItems:'center',gap:20,}}>
      {data.map((data2)=>{
         return <div key={data2.id} style={{border:"1px solid black",textAlign:'center'}} >
          <div >{data2.title}</div> 
       <img src={data2.image} alt=""  height={300} width={300} style={{objectFit:'fill'}} />
       <div>{data2.price}</div>
       <button onClick={()=>handleClick(data2.id)}>add</button>
 
      </div>
      })}
<hr />
      {/* <CartItem ProductId={id}/> */}
    </div>
    </>
  )

}

export default AddToCart
