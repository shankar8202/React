import  { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductTry() {
    const[data,setData]=useState([])
    useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res2=>setData(res2))
    },[])

    let cards= data.map(items=>( 
    <div key={items.id}   >
        {/* -------------------------------cards */}
    <Card  style={{ width: '18rem'}}>
<Card.Img variant="top" src={items.image}  style={{height:200, objectFit:'cover',padding:20,}}/>
<Card.Body>
  <Card.Title style={{overflow:'auto'}}>{items.title}</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the cards content.
  </Card.Text>
  <Button variant="danger">Go somewhere</Button>
</Card.Body>
</Card>
{/* -------------------------------------------cards */}
</div>))
    // style={{display:'flex'}}
  
  return (
    <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap' ,textAlign:'center', height:"100em"}}  >
     {cards}
    </div>
  )
}

export default ProductTry
