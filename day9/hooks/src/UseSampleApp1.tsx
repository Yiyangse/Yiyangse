import React, { useState } from 'react';

function UseSampleApp1() {
  // 각 연산에 필요한 상태 변수들을 정의
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);

  // 각 연산 결과를 저장할 상태 변수들을 정의
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);

  // 피연산자 입력값 변경 시 호출되는 함수들
  const handleInputAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(Number(e.target.value));
  };
  const handleInputBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(Number(e.target.value));
  };
  const handleInputCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setC(Number(e.target.value));
  };
  const handleInputDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setD(Number(e.target.value));
  };
  const handleInputEChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setE(Number(e.target.value));
  };
  const handleInputFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setF(Number(e.target.value));
  };
  const handleInputGChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setG(Number(e.target.value));
  };
  const handleInputHChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setH(Number(e.target.value));
  };

  // 각 연산 버튼 클릭 시 호출되는 함수들
  const handleResult1Button = () => {
    setResult1(a + b); // 덧셈 연산 후 결과 설정
  };
  const handleResult2Button = () => {
    setResult2(c - d); // 뺄셈 연산 후 결과 설정
  };
  const handleResult3Button = () => {
    setResult3(e * f); // 곱셈 연산 후 결과 설정
  };
  const handleResult4Button = () => {
    setResult4(g / h); // 나눗셈 연산 후 결과 설정
  };

  // 화면에 계산기 UI를 렌더링
  return (
    <div>
      {/* 첫 번째 덧셈 입력란과 버튼 */}
      <input type='text' onChange={handleInputAChange} value={a} />
      <input type='text' onChange={handleInputBChange} value={b} />
      <button onClick={handleResult1Button}>+</button>
      <span>{result1}</span>
      <br />
      {/* 두 번째 뺄셈 입력란과 버튼 */}
      <input type='text' onChange={handleInputCChange} value={c} />
      <input type='text' onChange={handleInputDChange} value={d} />
      <button onClick={handleResult2Button}>-</button>
      <span>{result2}</span>
      <br />
      {/* 곱셈 입력란과 버튼 */}
      <input type='text' onChange={handleInputEChange} value={e} />
      <input type='text' onChange={handleInputFChange} value={f} />
      <button onClick={handleResult3Button}>*</button>
      <span>{result3}</span>
      <br />
      {/* 나눗셈 입력란과 버튼 */}
      <input type='text' onChange={handleInputGChange} value={g} />
      <input type='text' onChange={handleInputHChange} value={h} />
      <button onClick={handleResult4Button}>/</button>
      <span>{result4}</span>
      <br />
    </div>
  );
}

export default UseSampleApp1;
