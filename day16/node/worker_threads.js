// const { Worker, isMainThread, parentPort } = require('worker_threads');

// if (isMainThread) {
//   // 부모일 때
//   const worker = new Worker(__filename);
//   worker.on('message', (message) => console.log('from worker', message));
//   worker.on('exit', () => console.log('worker exit'));
//   worker.postMessage('ping');
// } else {
//   // 워커일 때
//   parentPort.on('message', (value) => {
//     console.log('from parent', value);
//     parentPort.postMessage('pong');
//     parentPort.close();
//   });
// }

// Output
// from parent ping
// from worker pong
// worker exit

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');
//Worker, isMainThread, parentPort, workerData 등의 필수 요소를 worker_threads 모듈에서 가져옵니다.
if (isMainThread) {
  // 메인 스레드에서 수행할 작업들...
  //isMainThread가 true일 경우, 코드는 메인 스레드에서 실행됩니다.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const mid = Math.floor(numbers.length / 2);
  //numbers 배열을 두 개의 부분 배열로 분할하여 두 개의 워커(worker)를 생성합니다.
  const worker1 = new Worker(__filename, { workerData: numbers.slice(0, mid) });
  const worker2 = new Worker(__filename, { workerData: numbers.slice(mid) });
  //Worker 생성자 함수를 사용하여 현재 파일(__filename)을 워커로 실행하도록 설정하고, 각 워커에게 workerData로 분할된 배열을 전달합니다.
  let sum1, sum2;
  //각 워커에서 계산된 합계를 받아와 sum1과 sum2에 저장합니다.
  //두 합계가 모두 정의되면, 합계를 더한 결과를 출력합니다.
  worker1.on('message', (message) => {
    //각 워커가 종료될 때 발생하는 'exit' 이벤트를 처리하여 로그를 출력합니다.
    sum1 = message;
    if (sum1 !== undefined && sum2 !== undefined) {
      console.log('Total Sum:', sum1 + sum2);
    }
  });

  worker2.on('message', (message) => {
    sum2 = message;
    if (sum1 !== undefined && sum2 !== undefined) {
      console.log('Total Sum:', sum1 + sum2);
    }
  });

  worker1.on('exit', () => console.log('Worker 1 exit'));
  worker2.on('exit', () => console.log('Worker 2 exit'));
  //isMainThread가 false일 경우, 코드는 워커 스레드에서 실행됩니다.
} else {
  // 워커 스레드에서 수행할 작업들...
  const numbers = workerData;
  //workerData를 통해 전달받은 배열(numbers)을 기반으로 합계를 계산합니다.
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum);
  parentPort.postMessage(sum);
  //계산된 합계를 로그에 출력하고, 부모 스레드로 결과를 전송합니다(parentPort.postMessage(sum)).
}
