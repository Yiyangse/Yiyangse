import React, { useState } from 'react';
import Timer from './components/Timer';

function UseEffectApp2() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/* 앞의 값에 따라서 보였다가 안보이는 && */}
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
}

export default UseEffectApp2;
