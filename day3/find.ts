// find funtion

const items = [
  { name: 'john', age: 20 },
  { name: 'linda', age: 20 },
  { name: 'sue', age: 20 },
  { name: 'jeff', age: 20 },
];

const john = items.find((item) => {
  return item.name === 'john';
});

console.log(john);
// tsc --target "es6" .\find.ts
// node .\find.js
