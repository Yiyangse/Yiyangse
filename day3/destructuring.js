function getEmployee(id) {
  return {
    name: 'John',
    age: 35,
    address: '123 st',
    count: 'Unite States',
  };
}

const { name: fullName, age } = getEmployee(22);
// const { name: fullName, age } = {
//   name: "John",
//   age: 35,
//   address: "123 st",
//   count: "Unite States",
// };
console.log(Employee, fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, 'Office st', 'France'];
}

const [id, officeAddress, count] = getEmployeeWorkInfo(33);
console.log('employee', id, officeAddress, count);
