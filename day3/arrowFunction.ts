// 화살표함수 만들기
// const myFunc = (message: string) => {
//   console.log(message);
// };

// myFunc('hello');

//-------------------------
// const myFunc = (message: string, title: string, age: number): boolean => {
//   console.log(message);
//   console.log(title);
//   console.log(age);
//   return true;
// };

// myFunc('hello', 'myFirstArrowFunc', 30);
//----------------------------
const myFunc = (message: string, title: string, age: number): boolean => {
  console.log(message);
  console.log(title);
  console.log(age);
  return true;
};

myFunc('hello', 'myFirstArrowFunc', 30);
// 함수입력 => 로직 출력
const func = () => console.log('func');
const func1 = () => ({ name: 'dave' });
const func2 = () => {
  const val = 20;
  return val;
};
// 실행하기
console.log(func());
console.log(func1());
console.log(func2());
