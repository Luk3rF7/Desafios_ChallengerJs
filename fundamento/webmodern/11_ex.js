/* 
Crie uma função que receba uma array e retorne o primeiro
 e o último elemento desse array como um novo array:
*/
function firstLastArray(elem) {
  let result = [];
  const indexArrayFirst = 0;
  const indexarrayLAst = elem.length - 1;
  const firstElem = elem[indexArrayFirst];
  const lastElem = elem[indexarrayLAst];

  return [firstElem, lastElem]
}
const arr = [0, 1, 2, 4, "ola teste"]
console.log(firstLastArray(arr))

// 
function firstLAstArray(elem) {
  const firstArray = elem.shift();
  const lastArray = elem.pop();

  return [firstArray, lastArray]
}

console.log(firstLAstArray(arr))

function fisrtLAstArraySpread([firstElem, ...elemRest]) {
  const lastElem = elemRest.pop();
  return [firstElem, lastElem]
}

console.log(fisrtLAstArraySpread(arr))