const mappedEmp = new Map();
mappedEmp.set('linda', { fullName: 'Linda Johnson', id: 1 });
mappedEmp.set('Jim', { fullName: 'Jim Thomson', id: 2 });
mappedEmp.set('pam', { fullName: 'pam Dryer', id: 3 });

console.log(mappedEmp);
console.log('get', mappedEmp.get('jim'));
console.log('get', mappedEmp.size);

for ([key, val] of mappedEmp) {
  console.log('iterate : ', key, val);
}
