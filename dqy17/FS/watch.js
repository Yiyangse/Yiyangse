const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
  console.log(eventType, filename);
});

// // 내용물 수정 후
// change target.txt
// change target.txt
// // 파일명 변경 또는 파일 삭제 후
// rename target.txt
