/* 
? https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript
todo string fundamental
*/
const countWords = str => str.split(/\s/).filter(str => str).length
console.log(countWords('hello a a'))