const os = require('os');
//운영체제의 정보를 담고 있으며, 모듈을 require로 가져온다.
//내장모듈이라 경로대신 이름만 적어줘도 된다.
console.log('운영체제 정보-------------------------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로--------------------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보-----------------------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);
//다른 코어가 있다면 나머지 코어의 정보가 나옴
console.log('메모리 정보---------------------------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());
