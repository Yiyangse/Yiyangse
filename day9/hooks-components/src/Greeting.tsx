import React, { FC, useState, useEffect } from 'react';

interface GreetingProps {
  name?: string;
}

const Greeting: FC<GreetingProps> = ({ name }: GreetingProps) => {
  const [message, setMessage] = useState('');
  // message는 변수
  // useEffect는 화면이 랜더링 된 다음에 실행된다.
  useEffect(() => {
    if (name) {
      setMessage(`Hello from, ${name}`);
    }
  }, [name]);

  if (!name) {
    return <div>no name given</div>;
  }
  return <div>{message}</div>;
};

export default Greeting;
