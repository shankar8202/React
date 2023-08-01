import  { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This effect will run after every render

    // Update the document title with the current seconds
    document.title = `Seconds: ${seconds}`;

    // Clean up the effect
    return () => {
      document.title = 'React App'; // Reset the document title
      console.log("print")
    };
  });

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => setSeconds(seconds + 1)}>Increment</button>
    </div>
  );
}
export default Timer