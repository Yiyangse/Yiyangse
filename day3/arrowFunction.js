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
var myFunc = function (message, title, age) {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;
};
myFunc('hello', 'myFirstArrowFunc', 30);
// 함수입력 => 로직 출력
var func = function () { return console.log('func'); };
var func1 = function () { return ({ name: 'dave' }); };
var func2 = function () {
    var val = 20;
    return val;
};
// 실행하기
console.log(func());
console.log(func1());
console.log(func2());
