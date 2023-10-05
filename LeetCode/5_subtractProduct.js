/* 
 give an integer number n,return difference between 
 the product of its digits the sum of this digits


 input  n = 234
 outrput : 15

 product of digits = 2 * 3 * 4 = 24
 sum of digits = 2 + 3 + 4 = 9
 result = 24- 9 = 15
*/

const subtractProductAndSum = function (n) {
  // transform numero em array separando eles:
  let nArr = n.toString().split('');


  let sum = 0;
  let product = 1

  //
  for (let i = 0; i < nArr.length; i++) {
    sum += parseInt(nArr[i]);
    product *= parseInt(nArr[i])
    console.log(sum, product);
  }
  return product - sum
}
console.log(subtractProductAndSum(123))