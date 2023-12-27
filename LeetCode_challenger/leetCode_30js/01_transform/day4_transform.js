/* 
Dado um array inteiro  arr e uma função de mapeamento  fn,
retorne um novo array com uma transformação aplicada a cada elemento.

A matriz retornada deve ser criada de forma que  
  returnedArray[i] = fn(arr[i], i).

Por favor, resolva sem o método integrado Array.map.

Exemplo 1:

Entrada: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
 Saída: [2,3,4]
 Explicação:
const newArray = mapa(arr, mais um); // [2,3,4]
A função aumenta cada valor do array em um.
*/

// * Com map() Programing funcional

const map = function (arr, fn) {
  return arr.map(fn)
}

// * Loops

const loopsMap = function (arr, fn) {
  for (const index in arr) {
    fn(arr[index], index)
  }
}
// * procedural programing

const procMap = function (arr, fn) {
  const result = []

  for (const index in arr) {
    result.push(fn(ar[i], i))
  }

  return result;
}


// * strategy designer patterns 
// * Behavioral - Open-closed Principle

const Behavioral = function (arr, fn) {
  // dynamic array
  const res = new Array(arr.length);

  for (const i in arr) {
    res[i] = fn(arr[i], Number(i));
  }
  return res;
}
