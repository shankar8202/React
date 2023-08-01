import  { useState, useRef } from 'react';

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    // console.log(intervalRef.current)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 100);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
  };

  const resume = () => {
    start();
  };

  const reset = () => {
    setTimer(0);
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h3>React Stopwatch</h3>
      <div>
        <p>{timer}</p>
      </div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
