class Person {
  // 생성자 함수 정의
  constructor(msg: string = '') {
    // 객체가 생성될 때 실행되는 코드
    console.log('생성자 되니?'); // '생성자 되니?' 라는 메시지를 콘솔에 출력
    this.msg = msg;
  }

  msg: string; // msg라는 문자열 타입의 속성 정의

  speak() {
    // speak 메서드 정의
    console.log(this.msg); // 메서드 내부에서 this.msg 값을 콘솔에 출력
  }
}

const tom = new Person(); // Person 클래스의 인스턴스 생성
const peter = new Person('hi');
const kevin = new Person('go');
const dongsu = new Person();
tom.msg = 'hello'; // tom 인스턴스의 msg 속성에 'hello' 문자열 할당
tom.speak(); // tom 인스턴스의 speak 메서드 호출
peter.speak();
kevin.speak();
dongsu.speak();
