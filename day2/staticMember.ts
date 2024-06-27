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

class Runner {
  static lastRunTypeName: string;

  constructor(private typename: string) {}

  run() {
    Runner.lastRunTypeName = this.typename;
  }
}

const a = new Runner('a');
const b = new Runner('b');
a.run();
b.run();
console.log(Runner.lastRunTypeName);

// b
