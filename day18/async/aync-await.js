async function myName() {
  //async 예제
  return 'Andy';
}

async function showName() {
  //async await 예제, 이름을 출력하는 함수
  const name = await myName();
  console.log(name);
}
console.log(myName());
console.log(showName()); //콘솔에 이름 출력

function waitOneSecond(msg) {
  // ❶ 1초 대기하고 메시지 출력
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}
async function countOneToTen() {
  // ❷ 10초 동안 1초마다 메시지 출력
  for (let x of [...Array(10).keys()]) {
    // ❸ 0부터 9까지 루프를 순회
    // ❹ 1초 대기 후 result에 결괏값 저장
    let result = await waitOneSecond(`${x + 1}초 대기 중...`);
    console.log(result);
  }
  console.log('완료');
}

countOneToTen();
