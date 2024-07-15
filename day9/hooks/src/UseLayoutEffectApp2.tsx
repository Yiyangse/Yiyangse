import { useState, useEffect, useLayoutEffect, useRef } from 'react';

function getNumbers() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

function UseLayoutEffectApp2() {
  const [numbers, setNumbers] = useState([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nums: number[] = getNumbers();
    if (!nums) setNumbers(nums);
  }, []);

  return (
    <div ref={ref} style={{ height: '300px', border: '1px solid blue' }}></div>
  );
}

export default UseLayoutEffectApp2;
