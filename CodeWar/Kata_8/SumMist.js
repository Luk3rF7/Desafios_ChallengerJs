/* 
? https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
todo : Array fundamentos

*/

function sumMix(x) {
  const sum = array => array.reduce((a, c) => a + c);
  const convertToNum = el => Number(el)
  const convertido = x.map(convertToNum);
  return sum(convertido);
}

console.log(sumMix(['1', 2, '5']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))


