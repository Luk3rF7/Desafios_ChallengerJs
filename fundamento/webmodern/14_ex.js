/* 
Desenvolva uma função que recebe como parâmetro 
um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor 
que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:

*/
const ObjArray = {
  nome: "maria",
  profissao: "desenvolvedora de software"
}

const objArr2 = {
  codigo: 111,
  preco: 1200
}

function objForArray(obj) {
  const result = []
  for (let key in obj) {
    result.push([key, obj[key]])
  }
  return result
}
function objForArray2(obj) {
  const key = Object.keys(obj);
  const result = key.map(key => [key, obj[key]])
  return result;
}
function objForArray3(obj) {
  return Object.entries(obj)
}
console.log('obj entries = ', objForArray3(objArr2))
console.log('com map', objForArray2(ObjArray))
console.log('utilizando for in', objForArray(objArr2))