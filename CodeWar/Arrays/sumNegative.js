/* 
? https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
todo arrays
*/

function countPositivesSumNegatives(a) {
  if (!a || !a.length) return []

  let pos = a.filter(x => x > 0),
    neg = a.filter(x => x <= 0)

  return [pos.length, Math.floor(neg.reduce((s, v) => s + v, 0))]
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

