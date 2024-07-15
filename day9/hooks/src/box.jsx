import React, { useEffect, useState } from 'react';

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log('박스를 크게 키우기');
    setStyle(createBoxStyle());
  }, [createBoxStyle]); // useEffect의 의존성 배열이 올바르게 닫히도록 수정

  return <div style={style}></div>;
};

export default Box;
