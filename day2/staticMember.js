// class ClassA {
//   static typeName: string;
//   constructor() {}
//   static getFullname() {
//     return 'ClassA' + ClassA.typeName;
//   }
// }
// const a = new ClassA();
// console.log(ClassA.typeName);
// console.log(ClassA.getFullname());
// undefined
// ClassAundefined
var Runner = /** @class */ (function () {
    function Runner(typename) {
        this.typename = typename;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typename;
    };
    return Runner;
}());
var a = new Runner('a');
var b = new Runner('b');
a.run();
b.run();
console.log(Runner.lastRunTypeName);
// b
