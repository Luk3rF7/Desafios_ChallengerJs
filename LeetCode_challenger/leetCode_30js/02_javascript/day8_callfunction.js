/* 
Dada uma função fn, retorne uma nova função que seja idêntica à função original,
 exceto que garante que  fn seja chamada no máximo uma vez.

Na primeira vez que a função retornada for chamada, 
ela deverá retornar o mesmo resultado que  fn.
Toda vez que for chamado, ele deverá retornar  undefined.
 
Exemplo 1:

Entrada: fn = (a,b,c) => (a + b + c), chamadas = [[1,2,3],[2,3,6]] Saída
 : [{"chamadas":1, "valor":6}]
 Explicação:
const uma vezFn = uma vez(fn);
uma vezFn(1, 2, 3); //6
uma vezFn(2, 3, 6); // indefinido, fn não foi chamado
*/

var once = function (fn) {
  let called = false;

  return function (...args) {
    // se called for false deixo undefined /
    if (called) {
      return undefined
    }
    // caso contrario :
    called = true

    return fn(...args);
  }
  /* 
  * Outro modo mais rapido :
      let called = false;
        return function(...args){
          if (!called) {
            called = true;
            return fn(...args);
        }
    }
   */
};