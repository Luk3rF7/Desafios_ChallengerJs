/* 

? https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
todo:
*/
function digitize(n) {
  const convertString = (n + '').split('').reverse()
  return convertString.map(Number)
}

console.log(digitize(35231))
