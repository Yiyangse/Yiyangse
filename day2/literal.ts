let literal: { name: string } | 'tom' | 'linda' | 'jeff' | 'sue' = 'linda';
// literal 타입을 정의하면서 값을 줌
literal = 'sue';
literal = 'tom';
// literal = "john";
console.log(literal);
// tom
