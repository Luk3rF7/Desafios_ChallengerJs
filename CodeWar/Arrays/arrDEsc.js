function sumOfDifferences(arr) {
  const desc = (a, b) => b - a;
  const arrD = arr.sort(desc);
  return arrD.reduce((acc, curr, index, array) => {
    const next = array[index + 1];
    if (!isNaN(curr - next)) {
      acc += curr - next;
    }
    return acc;
  }, 0);
}

const arrayT = [-3, -2, -1];
const arrayT2 = [1, 2, 10];

console.log(sumOfDifferences(arrayT))
console.log(sumOfDifferences(arrayT2))