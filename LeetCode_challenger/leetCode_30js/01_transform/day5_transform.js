/* 
  Dado um array inteiro arre uma função de filtragem fn,
  retorne um array filtrado filteredArr.

A fnfunção leva um ou dois argumentos:

arr[i]- número doarr
i - índice dearr[i]
filteredArrdeve conter apenas os elementos dos
arrquais a expressão fn(arr[i], i)é avaliada como um valor verdadeiro . 
Um  valor verdadeiro  é um valor onde  Boolean(value) retorna  true.

Por favor, resolva sem o método integrado Array.filter.

Exemplo 1:

Entrada: arr = [0,10,20,30], fn = function maior que10(n) { return n > 10; }
 Saída: [20,30]
 Explicação:
const novoArray = filtro(arr, fn); // [20, 30]
A função filtra valores que não sejam maiores que 10
*/

const filter = function (arr, fn) {
  /*
    * Declarative programing
      
  arr.filter((num, index) => {
     modo imperativo
    return num > 10
  })
  */
  /* ================================================== */
  /* 
    * Modo Imperativo 
    const  res = [];

      for(let num of arr){
        if( fn(arr[num] ,Number(i) ) > 10){
           res.push(arr[num]) 
        }
      }
       return res
  */
}