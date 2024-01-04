/* 
! Link Problema :
? https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
TODO String

*/
function strCount(str, letter) {
  //code here
  let count = 0
  const strArr = str.split('');
  return strArr.map(str => str === letter ? 0 : count++)
}

function strCountPF(str, letter) {
  return str.split('').filter(str => str == letter).length;
}
console.log(strCount('hello'));
// console.log(strCount('hello', 'e'));
// console.log(strCount('hello', 'l'));
// console.log(strCount('hello', '0'));
// console.log(strCount('', 'z'));