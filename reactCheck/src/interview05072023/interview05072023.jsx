import { useState } from "react";  //need to process and onclick content shold br process area

const TodoProcessor = () => {
  const [process, setProcess] = useState([]);
  const [process2, setProcess2] = useState([]);

  function handleClick(e) {
    const task = e.target.innerText;
    console.log(e,"e")
    setProcess((prev) => [...prev, task]);
    e.target.innerText = "";
  }
  function handleComplete(e){
    const task = e.target.innerText;
    setProcess2((prev) => [...prev, task]);
    e.target.innerText = "";
  }

  return (
    <>
      <h1>todos</h1>
      <div onClick={handleClick}>task1</div>
      <div onClick={handleClick}>task2</div>
      <div onClick={handleClick}>task3</div>
      <hr />

      <h2>Process</h2>
      {process.map((data,i)=>{
        return (
           <>
            <div key={i} onClick={(e)=>{handleComplete(e)}} >{data} </div>
           
           </>
        )
      })}
      <hr />

      <h2>Complete</h2>
      {process2.map((data,i)=>{
        return <>
         <div key={i}>{data}</div>
        </>
      })}
    </>
  );
};

export default TodoProcessor;
