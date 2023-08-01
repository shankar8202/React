import  { useEffect, useState } from 'react'

function Cheack() {

    const [value, setValue] = useState("");
    function handleChange(event) {
       setValue(event.target.value);
     }
    
     return (
       <div>
         <input type="text" value={value} onChange={handleChange} />
         <p>You entered: {value}</p>
       </div>
     );







    // ------------------------------

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //    console.log("Component rendered successfully");
    //  }, []);
    //   return (
    //    <div>
    //      <button onClick={() => setCount(count + 1)}>Click me</button>
    //      <p>You clicked {count} times</p>
    //    </div>
    //  );
      }

export default Cheack
