// this 컨텍스트가 함수가 다르면, 공유가 되는지 확인해보기
var A = /** @class */ (function () {
    function A() {
        this.name = 'A';
    }
    A.prototype.go = function () {
        console.log(this.name);
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.name = 'b';
    }
    B.prototype.go = function () {
        console.log(this.name);
    };
    return B;
}());
var a = new A();
a.go();
var b = new B();
b.go = b.go.bind(a);
b.go();
