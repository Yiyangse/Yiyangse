import { useState } from 'react';

function UseStateApp1() {
  const [time, setTime] = useState(11);
  const [minute, setMinute] = useState(59);
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const handleMinuteClick = () => {
    let newTime;
    if (minute >= 59) {
      newTime = 0;
    } else {
      newTime = minute + 1;
    }
    setMinute(newTime);
  };
  return (
    <div>
      <span>
        현재시간: {time}시 : {minute}분
      </span>
      <button onClick={handleClick}>Update</button>
      <button onClick={handleMinuteClick}>Minute Update</button>
    </div>
  );
}

export default UseStateApp1;
