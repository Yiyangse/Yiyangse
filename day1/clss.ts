class Person {
  constructor() {
    console.log('생성자 되니?');
  }
  msg: string;
  speak() {
    console.log(this.msg);
  }
}

const tom = new Person();
tom.msg = 'hello';
tom.speak();
