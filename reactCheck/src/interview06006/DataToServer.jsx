import { useState } from "react";
const MyComponent = () => {
    const [data, setData] = useState('');
  
    const handleSubmit = (event) => {
        console.log(event)
      event.preventDefault();
  
      const url = 'https://fakestoreapi.com/products';
      const body = JSON.stringify({ data });
  
      fetch(url, {
        method: 'POST',
        body: body,
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="data" value={data} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  export default MyComponent
  
//   fetch('https://api.example.com/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'John', age: 25 }),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });