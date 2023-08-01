import { useRef } from "react";

const AutoFocusWithRef = () => {
  const inputRef = useRef("null");

  const toggleFocus = () => {
    // console.log(inputRef);
    // console.log(inputRef.current);                    
    inputRef.current.focus();                //this use ref able to directly talk with Dom 
  };

  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef} />

      </div>

      <button onClick={toggleFocus}>Toggle Focus</button>
    </>
  );
};

export default AutoFocusWithRef;
