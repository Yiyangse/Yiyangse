var Person = /** @class */ (function () {
    // 생성자 함수 정의
    function Person(msg) {
        if (msg === void 0) { msg = ''; }
        // 객체가 생성될 때 실행되는 코드
        console.log('생성자 되니?'); // '생성자 되니?' 라는 메시지를 콘솔에 출력
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        // speak 메서드 정의
        console.log(this.msg); // 메서드 내부에서 this.msg 값을 콘솔에 출력
    };
    return Person;
}());
var tom = new Person(); // Person 클래스의 인스턴스 생성
var peter = new Person('hi');
var kevin = new Person('go');
var dongsu = new Person();
tom.msg = 'hello'; // tom 인스턴스의 msg 속성에 'hello' 문자열 할당
tom.speak(); // tom 인스턴스의 speak 메서드 호출
peter.speak();
kevin.speak();
dongsu.speak();
