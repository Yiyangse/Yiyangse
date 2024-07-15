import React, { useEffect, useRef } from 'react';

const UseRefApp4 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // null값이 아닐 때
  useEffect(() => {
    if (inputRef.current !== null) {
      // 인풋에 포커스태그 두면 마우스 안움직여도 바로 시행.
      // 즉 모션이 줄어든다.
      inputRef.current.focus();
      console.log(inputRef.current);
      inputRef.current.addEventListener('dbclick', () => {
        alert('test');
      });
    }
  });
  // 로그인 함수만들기
  const login = () => {
    // !는 null 체크하는 표시
    alert(`환영합니다. ${inputRef.current!.value}`);
    // ?는 nullable
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='username' />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default UseRefApp4;
