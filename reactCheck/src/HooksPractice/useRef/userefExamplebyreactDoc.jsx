import  { useRef, useState } from "react";

const UserefExamplebyreactDoc = () => {
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  let ref=useRef(null)
  
  function handleClick() {
    setIsSending(true)
  ref.current=setTimeout(() => {
   
      alert("message sent")
      setIsSending(false)
  }, 3000);
  }
  function handleUndo(){
    setIsSending(false);
    clearTimeout(ref.current)
  }
  return (
    <div>
      <input  disabled={isSending} value={input} type="text" onChange={e=>setInput(e.target.value)} />
      <button  disabled={isSending} onClick={handleClick}> {isSending?"sending...":"send"}</button>

    {isSending && 
    <button onClick={handleUndo}>undo</button>
    }

    </div>
  );
};

export default UserefExamplebyreactDoc;
