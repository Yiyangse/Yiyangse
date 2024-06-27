function oldEnough(age: number): never | boolean {
  // union 타입 반환
  if (age > 59) {
    throw Error('Too old!');
  }
  if (age <= 18) {
    return false;
  }
  return true;
}
