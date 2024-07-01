// this 컨텍스트가 함수가 다르면, 공유가 되는지 확인해보기
class A {
  name: string = 'A';
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = 'b';
  go() {
    console.log(this.name);
  }
}

const a = new A();
a.go();

const b = new B();
b.go = b.go.bind(a);
b.go();
