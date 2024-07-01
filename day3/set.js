const userIds = [1, 2, 1, 3, 1, 2, 3, 4, 5, 6, 4, 6, 8, 9, 7];

const uniqueIds = new Set(userIds);

console.log('uniqueIds : ', uniqueIds);

uniqueIds.add(10);
console.log('uniqueIds add 10 : ', uniqueIds);

console.log('Has :', uniqueIds.has(3));

console.log('size', uniqueIds.size);

for (item of uniqueIds) {
  console.log('iterate : ', item);
}

for (item of userIds) {
  console.log('array iterate ', item);
}

//로그파일에서 아무런 액션을 취하지 않은 사람은 누구냐?
//로그파일에서 한 번이라도 접속한 사용자를 찾기
