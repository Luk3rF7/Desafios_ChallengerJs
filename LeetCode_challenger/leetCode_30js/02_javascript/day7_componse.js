/* 
Dado um array de funções  , retorne uma nova função   
que é a composição funcional do array de funções.
[f1, f2, f3, ..., fn]fn
A  composição  da  função
 [f(x), g(x), h(x)] é  fn(x) = f(g(h(x))).
A  composição funcional  de uma lista vazia de funções
 é a  função identidade f(x) = x .

Você pode assumir que cada função no array aceita
 um número inteiro como entrada e retorna um número inteiro como saída.

Exemplo 1:

Entrada: funções = [x => x + 1, x => x * x, x => 2 * x], x = 4
 Saída: 65
 Explicação:
Avaliando da direita para a esquerda...
Começando com x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/

const compose = function (function) {

  return function (x) {

    for (const fn of function) {
      x = fn(x)
    }
    return x
  }
  /* 
   * loops for

    return function(x) {

        for(let i = functions.length-1; i>=0; i--){

            x =  functions[i](x);

        }

        return x;
       
  */

};