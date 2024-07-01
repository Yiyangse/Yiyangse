const allTrucks = [2, 5, 7, 10];

const initialCapacity = 0;
const allTonnage = allTrucks.reduce((tatalCapacity, currentCapacity) => {
  tatalCapacity = tatalCapacity + currentCapacity;
  return tatalCapacity;
}, initialCapacity);

console.log('tatalCapacity : ', allTonnage);
//expect 24
