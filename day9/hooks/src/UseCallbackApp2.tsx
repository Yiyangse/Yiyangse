import React, { useCallback, useState, useEffect } from 'react';
import Box from './box';

function UseCallbackApp2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  const createBoxStyle = useCallback(
    () => {
      return {
        backgroundColor: 'pink',
        width: `${size}px`,
        height: `${size}px`,
      };
    },
    // 독립적인array
    [size]
  );

  return (
    <div style={{ background: isDark ? 'black' : 'white' }}>
      {/* 바뀔때마다 사이즈 변경되는 함수 */}
      <input
        type='number'
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <br />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default UseCallbackApp2;
