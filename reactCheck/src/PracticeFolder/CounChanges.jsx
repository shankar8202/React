//count how many times input vale got changed
import React, { useState } from 'react'

function CounChanges() {

  

    const [inputValue, setInputValue] = useState("");
    const [changeCount, setChangeCount] = useState(0);
  
    function handleInputChange(e) {
      const newInputValue = e.target.value;   //first value will add    newInputValue    "then " it wil go tp inputval 
      setInputValue(newInputValue);

      if (newInputValue.length < inputValue.length) {
        
        setChangeCount((prevCount) => prevCount - 1);
       
      } else {
       
        setChangeCount((prevCount) => prevCount + 1);
       
      }
     
    }
  
   
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
      
          placeholder="Type something..."
        />
        <p>Change Count: {changeCount}</p>
        <p> {inputValue}</p>
      </div>
    );
    

//     const[input,setInput]=useState("")
//     const[count,setCount]=useState(0)
//     const[minus,setMinus]=useState(count)
//     function handleChange(e){
//      setInput(e.target.value)
//      setCount(count+1)
//     }
//     function handleDown(){
//         setMinus(minus-1)

//     }
//   return (
//     <div>
//       <input type="text" name="" onKeyDown={handleDown}  onChange={handleChange} />
//       <div>{input}</div>
//       <div>{count}</div>
//     </div>
//   )
}

export default CounChanges
