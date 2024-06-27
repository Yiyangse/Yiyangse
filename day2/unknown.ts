let val: unknown = 22;
val = 'string value';
val = new Array();
console.log(val instanceof Array); //val이 Array 안에 있는지 체크하는 함수
//true

if (val instanceof Array) {
  val.push(33);
}
console.log(val);
//33
