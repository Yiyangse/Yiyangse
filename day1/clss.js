var Person = /** @class */ (function () {
    function Person() {
        console.log('생성자 되니?');
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person();
tom.msg = 'hello';
tom.speak();
