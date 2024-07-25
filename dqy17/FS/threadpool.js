// 파일 시스템 실습을 하면서 fs 모듈의 비동기 메서드들을 사용해봤습니다. 비동기 메서드들은 백그라운드에서 실행되고, 실행된 후에는 다시 메인 스레드의 콜백 함수나 프로미스의 then 부분이 실행됩니다. 이때 fs 메서드를 여러 번 실행해도 백그라운드에서 동시에 처리되는데, 바로 스레드 풀이 있기 때문입니다.

// fs 외에도 내부적으로 스레드 풀을 사용하는 모듈로는 crypto, zlib, dns.lookup 등이 있습니다.

// 스레드 풀을 쓰는 crypto.pbkdf2 메서드의 예제로 스레드 풀의 존재를 확인해보겠습니다.
const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('6:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('7:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('8:', Date.now() - start);
});

// 3: 1442
// 1: 1457
// 2: 1505
// 4: 1506
// 6: 2929
// 7: 2934
// 5: 2944
// 8: 3024
