const employeees = [
  { name: 'john', id: 10 },
  { name: 'linda', id: 20 },
  { name: 'cindy', id: 30 },
  { name: 'jeff', id: 40 },
];

const elements = employeees.map((item, idx) => {
  console.log(idx);
  return `<div>${item.id} - ${item.name}</div>`;
});

console.log(elements);
