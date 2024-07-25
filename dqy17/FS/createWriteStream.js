const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();

// 문제 ; 아래와 같은 모양을 writeme2-1.txt에 저장하세요.for문을 사용하세요.
// const fs = require('fs');
// const writeStream = fs.createWriteStream('./writeme2-1.txt');
// writeStream.on('finish', () => {
//   console.log('파일 쓰기 완료');
// });

// for (let i = 0; i < 5; i++) {
//   let line = '';
//   for (let j = 0; j <= i; j++) {
//     line += '1';
//   }
//   for (let k = i + 1; k < 5; k++) {
//     line += '0';
//   }
//   writeStream.write(line + '\n');
// }
// writeStream.end();
