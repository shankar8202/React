import { useEffect, useMemo, useState } from 'react'

function SearchnFunct() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data2) => setData(data2));
  }, []);

  function matchInput(data, search) {
    return data.includes(search);
  }

  const debounce = (func, delay) => {
    console.log(func,"func")
    let timerId;
    return function (...args) {   
      //console.log(...args,"arges")        //jo hm input de rhy h
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = useMemo( () =>
   
      debounce((input) => {
        setSearch(input);
      }, 300),
    []
  );

  const filteredData = useMemo(() => {
    return data.filter((items) => {
      const { title, body } = items;
      if (matchInput(title, search)) {
        return true;
      }
      if (matchInput(body, search)) {
        return true;
      }
      return false;
    });
  }, [search, data]);

  return (                                               //onchange se ham directly value set ni krrhy ye phle debounce me hoty huy jaygi fir call hoga fnction
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />  
      <div>
        {filteredData.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </div>
    </div>
  );
}

export default SearchnFunct;









// import  { useEffect, useMemo, useState } from 'react'

// function SearchnFunct() {
//     const[data,setData]=useState([])
//     const[search,setSearch]=useState()
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>data.json())
//         .then((data2)=>setData(data2))
//     },[])
//     // console.log(data)
//     function matchInput(data,search){
//         return data.includes(search)

//     }

//     let usemeo=useMemo(()=>{
//         let filterd=data.filter((items)=>{
//             const{title,body}=items;
//             if (matchInput(title, search)) {
//                 return true;
//               }
//               if (matchInput(body, search)) {
//                 return true;
//               }
//          return false
//         })
//         return filterd
//     },[search,data])
//     // console.log(search)
//   return (
//     <div>
//         <input type="text" onChange={(e)=>setSearch(e.target.value)} />
//             <div>{
//                 usemeo.map((item)=>{
//                     return <p key={item.id}>   {item.title}</p>
//                 })
//                 }</div>
//     </div>
//   )
// }

// export default SearchnFunct
