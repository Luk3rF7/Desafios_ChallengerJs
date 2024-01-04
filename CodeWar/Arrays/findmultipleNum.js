/* 
?https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
todo array
*/

function findMultiples(integer, limit) {
  const result = []
  for (let i = integer; i <= limit; i += integer) {
    result.push(i)
  }
  return result
}
function findMultiples_comWhile(integer, limit) {
  const result = []
  let init = integer;

  while (init <= limit) {
    result.push(init)
    init += integer
  }
}


return result
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])