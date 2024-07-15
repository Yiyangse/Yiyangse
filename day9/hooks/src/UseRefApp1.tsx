import React, { useState, useRef } from 'react';

const UseRefApp1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log('랜더링', count);

  const increaseCountState = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>state:{count}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={increaseCountState}>State올려</button>
      <button onClick={increaseCountRef}>Ref올려</button>
    </div>
  );
};

export default UseRefApp1;
