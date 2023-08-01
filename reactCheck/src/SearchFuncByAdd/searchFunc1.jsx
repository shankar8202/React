
import {  useRef, useState } from "react"

const SearchFunc=()=>{
    let myRef=useRef()
   const [data,setData]=useState([])
   const [query,setQuery]=useState("")
//    const [edit,setEdit]=useState([])

   let filteredItems=data.filter(items=> {
  return  items.toLowerCase().includes(query.toLowerCase())
   })

    function handleSub(e){
        e.preventDefault()
      let refValue= myRef.current.value
     
      setData((pre)=>[...pre,refValue])
    myRef.current.value=""
    }

    


console.log(query)

    return (
   <>
   Search:
    <input type="search" value={query} onChange={e=>setQuery(e.target.value)} />
    <form onSubmit={handleSub}>
        input:
        <input type="text" ref={myRef}  />
        <button>Add</button>
    </form>
    <div> <h1>Yours items</h1> {
        filteredItems.map((items,i)=>{
            
            return (<div key={i}>{items} <button>delete</button> <button   >edit</button> </div>)
        })
        
        }
        
        </div>
     
   </>
    
    )
}
export default SearchFunc























// import { useCallback, useMemo, useRef, useState } from "react"

// const SearchFunc=()=>{
//     let myRef=useRef()
//    const [data,setData]=useState([])
// //    const [search,setSearch]=useState([])
//    const [filter,setFilter]=useState([])

//     function handleSub(e){
//         e.preventDefault()
//       let refValue= myRef.current.value
     
//       setData((pre)=>[...pre,refValue])

//       setFilter((pre)=>[...pre,refValue])
      

//     myRef.current.value=""
//     }
//     // function SearchFunc(search,data){
//     //      if(search.includes(data)){
//     //         return true

//     //      }
//     // }

//     function handleSearch(e){
//         let searchval=e.target.value
//         setFilter(data.filter(items=>items.toLowerCase().includes(searchval.toLowerCase())))
//       }
//     // let Memo= useMemo(()=>{
//     //     let filterItems=data.filter((item)=>{
//     //         if  (SearchFunc(search,item)){
//     //          return true
//     //         }
//     //         else{
//     //             return "dosen't exist"
//     //         }
//     //      })
//     //      return filterItems
//     // },[search])
   


//     return (
//    <>
//    Search:
//     <input type="search" onChange={handleSearch} />
//     <form onSubmit={handleSub}>
//         input:
//         <input type="text" ref={myRef}  />
//         <button>Add</button>
//     </form>
//     <div> <h1>Yours items</h1> {
//         filter.map((items,i)=>{
//             return <div key={i}>{items}</div>
//         })
//         }</div>
//         {/* <h1> here{Memo.map((data,i)=>{
//           return  <div key={i}>{data}</div>
//         })}</h1> */}
//    </>
    
//     )
// }
// export default SearchFunc