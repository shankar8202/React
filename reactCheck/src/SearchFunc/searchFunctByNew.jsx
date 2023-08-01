import  { useEffect, useMemo, useState } from 'react'

function SearchFunctByNew() {
  const [data,setData] =useState([])
  const [search,setSearch]=useState()

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((data)=>data.json()).then((data2)=>setData(data2))
  },[])

  function matcFunc(mydata,char){
    return mydata.match(char)
     }

  function handleChange(e){
   setSearch(e.target.value)
   }
  
   let filterProduct=useMemo(()=>{
    let result=data.filter((items)=>{
        const{title,description}=items
        if(matcFunc(title,search)){
            return true
        }
        if(matcFunc(description,search)){
            return true
        }
        
    })
     return result
   
    
   },[search,data])


console.log(data)
  return (
    <div>
        
       <input type="text" onChange={handleChange} />
       <div>{
        filterProduct.map((data)=>{
            return <p key={data.id}>{data.title}</p>
        })
        }</div>
    </div>
  )
}

export default SearchFunctByNew
