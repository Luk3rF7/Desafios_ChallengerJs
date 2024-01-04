/* 
! link : 
?  https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
todo :  fundamentos
*/
function anyArrows(arrows) {
  // arrow it
  console.log(arrows)
  return arrows.some(arrow => arrow);
}

console.log(anyArrows([]))
console.log(anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }]))
console.log(anyArrows([{ range: 10, damaged: true }, { damaged: true }]))