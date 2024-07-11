import React, { useState, useEffect } from 'react';

function UseEffectApp1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  // useEffect(() => {
  //   console.log('랜더링');
  // });

  ////처음에
  // useEffect(() => {
  //   console.log('랜더링');
  // }, []);

  useEffect(() => {
    console.log('랜더링');
  }, [count]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }
  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count:{count}</span>
      <input type='text' value={name} onChange={handleInputChange}></input>
      <span>name:{name}</span>
    </div>
  );
}

export default UseEffectApp1;
