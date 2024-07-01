const filteritems = [
  { name: 'john', age: 20 },
  { name: 'linda', age: 20 },
  { name: 'sue', age: 20 },
  { name: 'jeff', age: 20 },
];

const result = filteritems.filter((item, idx) => {
  console.log(idx);
  return item.name === 'john';
});

const result1 = filteritems.filter((item) => item.name === 'john');

console.log(result);
console.log(result1);
