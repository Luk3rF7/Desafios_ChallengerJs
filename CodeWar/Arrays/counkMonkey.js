/* 
? https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript
todo array
*/

function monkeyCount(n) {
  let i = 0
  let countMonkey = []
  while (countMonkey.length < n) {
    countMonkey.push(++i)
  }
  //769ms 
  return countMonkey;
}
console.log(monkeyCount(8))
// console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
// console.log((monkeyCount(3)), [1, 2, 3]);
// console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);