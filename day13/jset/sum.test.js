const sum = require('./sum'); // sum 모듈을 불러옵니다.

test('adds 1 + 2 to equal 3', () => {
  // 'adds 1 + 2 to equal 3' 테스트 케이스를 정의합니다.
  expect(sum(1, 2)).toBe(3); // sum 함수에 1과 2를 인자로 전달하여 그 결과가 3인지 검사합니다.
});

test('2 더하기 2는 4', () => {
  // '2 더하기 2는 4' 테스트 케이스를 정의합니다.
  expect(2 + 2).toBe(4); // 2 + 2의 결과가 4인지 검사합니다.
});

// object 가 동일한지 테스트
test('객체 할당 테스트', () => {
  // '객체 할당 테스트' 테스트 케이스를 정의합니다.
  const data = { one: 1 }; // 객체를 정의합니다.
  data['two'] = 2; // 객체에 새로운 속성을 추가합니다.
  expect(data).toEqual({ one: 1, two: 2 }); // 객체가 { one: 1, two: 2 }와 동일한지 검사합니다.
});

test('양수 더하기', () => {
  // '양수 더하기' 테스트 케이스를 정의합니다.
  for (let a = 1; a < 10; a++) {
    // a에 대해 반복합니다.
    for (let b = 1; b < 10; b++) {
      // b에 대해 반복합니다.
      expect(a + b).not.toBe(0); // a와 b를 더한 결과가 0이 아닌지 검사합니다.
    }
  }
});

test('null', () => {
  // 'null' 테스트 케이스를 정의합니다.
  const n = null; // 변수 n을 null로 정의합니다.
  expect(n).toBeNull(); // n이 null인지 검사합니다.
  expect(n).toBeDefined(); // n이 정의되어 있는지 검사합니다.
  expect(n).not.toBeUndefined(); // n이 undefined가 아닌지 검사합니다.
  expect(n).not.toBeTruthy(); // n이 truthy하지 않은지 검사합니다.
  expect(n).toBeFalsy(); // n이 falsy한지 검사합니다.
});

test('zero', () => {
  // 'zero' 테스트 케이스를 정의합니다.
  const z = 0; // 변수 z를 0으로 정의합니다.
  expect(z).toBeDefined(); // z가 정의되어 있는지 검사합니다.
  expect(z).not.toBeUndefined(); // z가 undefined가 아닌지 검사합니다.
  expect(z).not.toBeTruthy(); // z가 truthy하지 않은지 검사합니다.
  expect(z).toBeFalsy(); // z가 falsy한지 검사합니다.
});

// Using matchers

test('two plus two', () => {
  // 'two plus two' 테스트 케이스를 정의합니다.
  const value = 2 + 2; // 변수 value를 2 + 2로 정의합니다.
  expect(value).toBeGreaterThan(3); // value가 3보다 큰지 검사합니다.
  expect(value).toBeGreaterThanOrEqual(3.5); // value가 3.5 이상인지 검사합니다.
  expect(value).toBeLessThan(5); // value가 5보다 작은지 검사합니다.
  expect(value).toBeLessThanOrEqual(4.5); // value가 4.5 이하인지 검사합니다.
  expect(value).toBe(4); // value가 4와 정확히 일치하는지 검사합니다.
  expect(value).toEqual(4); // value가 4와 정확히 일치하는지 검사합니다. (toBe와 동일한 기능)
});

test('adding floating point number', () => {
  // 'adding floating point number' 테스트 케이스를 정의합니다.
  const value = 0.1 + 0.2; // 변수 value를 0.1 + 0.2로 정의합니다.
  expect(value).toBeCloseTo(0.3); // value가 0.3에 근사한지 검사합니다. (부동 소수점 오차 고려)
});

test('there I no I in team', () => {
  // 'there I no I in team' 테스트 케이스를 정의합니다.
  expect('team').not.toMatch(/I/); // 'team' 문자열에 'I'가 포함되지 않는지 검사합니다.
});

test("but there is a 'stop' in Christoph", () => {
  // "but there is a 'stop' in Christoph" 테스트 케이스를 정의합니다.
  expect('Christoph').toMatch(/Christop/); // 'Christoph' 문자열이 정규 표현식 /Christop/에 일치하는지 검사합니다.
});

// 배열 안에 값 있는지 test
const shoppingList = [
  // shoppingList 배열을 정의합니다.
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  // 'the shopping list has milk on it' 테스트 케이스를 정의합니다.
  expect(shoppingList).toContain('milk'); // shoppingList 배열에 'milk'가 포함되어 있는지 검사합니다.
  expect(new Set(shoppingList)).toContain('milk'); // Set으로 변환한 shoppingList에 'milk'가 포함되어 있는지 검사합니다.
});

async function fetchData() {
  // fetchData 비동기 함수를 정의합니다.
  return 'peanut butter'; // 'peanut butter'를 반환하는 비동기 동작을 시뮬레이션합니다.
}

test('the data is peanut butter', async () => {
  // 'the data is peanut butter' 테스트 케이스를 정의합니다.
  const data = await fetchData(); // fetchData 비동기 함수를 호출하고 반환된 값이 'peanut butter'인지 검사합니다.
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  // 'the fetch fails with an error' 테스트 케이스를 정의합니다.
  try {
    await fetchData(); // fetchData 비동기 함수를 호출합니다.
  } catch (error) {
    expect(error).toMatch('error'); // fetchData에서 발생한 오류가 'error'를 포함하는지 검사합니다.
  }
});

//////////

function initializeCityDatabase() {}
function clearCityDatabase() {}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

function isCity(city) {
  return city === 'Vienna';
}

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Han', () => {
  expect(isCity('San Han')).not.toBeTruthy();
});
