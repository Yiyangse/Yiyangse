namespace A {
  class FirstClass {}
}
// namespace는 범위를 지정해준다.
namespace B {
  class SecondClass {}
  const test = new FirstClass();
}
// 하나의 범위 내부의 정보를 다른 범위에서 숨긴다.
