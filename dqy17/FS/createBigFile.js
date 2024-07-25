//다음은 1GB 용량의 텍스트 파일을 만드는 코드입니다. 실행 전에 현재 드라이브의 여유 용량이 충분한지 확인하고 실행해야 합니다. 시간이 조금 많이 소요될 수 있습니다.
const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 10000000; i++) {
  file.write(
    '안녕하세요. 엄청나게 큰 파일을 만들어 볼 것입니다. 각오 단단히 하세요!'
  );
}
file.end();
