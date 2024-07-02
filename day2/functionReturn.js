// function func1(obj) {
//   console.log("Hi");
//   console.log(obj);
// }
//자바스크립트에서 쓰는 양식
function runMore(distance) {
    return distance + 10;
}
console.log(runMore(20));
// 타입스크립트는 명확하게 변수의 타입을 지정한다.
// 선언 함수이름(파라미터):반환값의 타입{부연부}
// function runMore(distance) {
//   return distance+10;
// }
// console.log(runMore(20));
// 자바스크립트 형식은 이렇게 된다.
function Personal(name, age) {
    return '내 이름은' + name + '고, 나이는' + age + '이야';
}
