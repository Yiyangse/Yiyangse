// 스프레드연산자(...)를 사용해 사본을 만드는 방법
// 두개의 객체가 새로 만들어지는 객체보다 다르다?
namespace NamespaceA {
  class A {
    aname: string = 'A';
  }
  class B {
    bname: string = 'B';
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b };
  const d = Object.assign(a, b);
  console.log(c);
  console.log(d);

  a.aname = 'a1';
  console.log(c);
  console.log(d);
}
