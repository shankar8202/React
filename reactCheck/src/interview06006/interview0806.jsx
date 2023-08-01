// import  {  useRef } from 'react';

// import {  useState } from 'react';      //when i click undo it not working sent  is also running and send meassege



//  function Chat() {
//   const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   let timeoutID = null;

//   function handleSend() {
//     setIsSending(true);
//     timeoutID = setTimeout(() => {
//       alert('Sent!');
//       setIsSending(false);
//     }, 3000);
//   }

//   function handleUndo() {
//     setIsSending(false);
//     clearTimeout(timeoutID);
//   }

//   return (
//     <>
//       <input
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         disabled={isSending}
//         onClick={handleSend}>
//         {isSending ? 'Sending...' : 'Send'}
//       </button>
//       {isSending &&
//         <button onClick={handleUndo}>
//           Undo
//         </button>
//       }
//     </>
//   );
// }
// export default Chat;
// ---------------------------------------------------------


import { useState, useRef } from 'react';

 function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
    </>
  );
}
export default Chat;






// -------------------------------------------------------------------------
// function MyComponent() {
  
//   let ref=useRef(0);
// function handleClick(){
//   ref.current = ref.current + 1;
//    console.log(ref.current)
// }
// console.log("im i render ?")

// return (
//   <div>
//     <div>ref</div>
//    <button onClick={handleClick}>click me</button>
//   </div>
// )

// }

// export default MyComponent;
// ----------------------------------------
// let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert('You clicked ' + ref.current + ' times!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );