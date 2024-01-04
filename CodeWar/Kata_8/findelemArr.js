/* 
? https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
todo : array 
*/
function find(arr, el) {
  const find = arr => arr.includes(el)
  const indexFind = arr => arr.indexOf(el)
  if (find(arr)) {
    return indexFind(arr)
  } else {
    return 'Not Found'
  }

}

console.log(find([2, 3, 5, 7, 11], 11))