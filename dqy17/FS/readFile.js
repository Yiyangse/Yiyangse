const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  //인코딩 깨지는 경우 toString 활용하기!
  console.log(data.toString('utf8'));
});
