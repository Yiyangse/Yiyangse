// fs는 파일 시스템을 조작하는 다양한 메서드를 제공합니다. 지금까지는 단순히 파일 읽기/쓰기를 했지만, 파일을 생성하고 삭제할 수도 있으며 폴더를 생성하고 삭제할 수도 있습니다.

// 다음 예제를 통해 실습해봅시다.
const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    return Promise.reject('이미 폴더 있음');
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      console.log('폴더 없음');
      return fs.mkdir('./folder');
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log('폴더 만들기 성공');
    return fs.open('./folder/file.js', 'w');
  })
  .then((fd) => {
    console.log('빈 파일 만들기 성공', fd);
    return fs.rename('./folder/file.js', './folder/newfile.js');
  })
  .then(() => {
    console.log('이름 바꾸기 성공');
  })
  .catch((err) => {
    console.error(err);
  });

//   폴더 만들기 성공
// 빈 파일 만들기 성공 FileHandle {
//   _events: [Object: null prototype] {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   close: [Function: close],
//   [Symbol(shapeMode)]: false,
//   [Symbol(kCapture)]: false,
//   [Symbol(kHandle)]: FileHandle {},
//   [Symbol(kFd)]: 3,
//   [Symbol(kRefs)]: 1,
//   [Symbol(kClosePromise)]: null
// }
// 이름 바꾸기 성공
