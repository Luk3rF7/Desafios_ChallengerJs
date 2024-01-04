/* 
?https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
todo arrays 
 */


function divisibleBy(numbers, divisor) {
  return numbers.filter(elem => elem % divisor == 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))