/* 
Dada uma function fn, retorne uma  versão memorizada  dessa função.
Uma  função memorizada  é uma função que nunca será chamada duas vezes
com as mesmas entradas. Em vez disso, retornará um valor armazenado em cache.

Você pode assumir que existem  3  
funções de entrada possíveis  :  sum, e  .fibfactorial

sum aceita dois inteiros  ae bretorna a + b.
fib aceita um único número inteiro  ne retorna 
 1se n <= 1 ou não. fib(n - 1) + fib(n - 2) 
factorial aceita um único número inteiro  ne 
retorna 1 se  n <= 1 ou  factorial(n - 1) * n não.
 
Exemplo 1:

Entrada:
fnNome = "soma"
ações = ["call","call","getCallCount","call","getCallCount"]
valores = [[2,2],[2,2],[],[1,2],[]]
Saída: [4,4,1,3,2]

 Explicação:
const soma = (a, b) => a + b;
const memoizedSum = memoize(soma);
memoizedSoma(2, 2); // "call" - retorna 4. sum() foi chamado porque (2, 2) não foi visto antes.
memoizedSoma(2, 2); // "call" - retorna 4. Porém sum() não foi chamado porque as mesmas entradas foram vistas antes.
 "getCallCount" - contagem total de chamadas: 1
memoizedSoma(1, 2); // "call" - retorna 3. sum() foi chamado porque (1, 2) não foi visto antes.
 "getCallCount" - contagem total de chamadas: 2
Exemplo: 
*/

function memorize(fn) {
  // crio variavel para guarda
  const cache = {};

  return function (...args) {
    // faço conversao dos arg para string
    const key = JSON.stringify(args)
    // faço checagem do cache se tem msm valor :
    if (key in cache) {
      return cache[key];
    }
    // caso contrario retorne a funcao
    cache[key] = fn(...args);
    return cache[key]
  }

  /* 
   * utilizando Map 
     const cache = new Map();

    return function (...args) {
        const key = args[0] + (args[1] ? args[1]*10001 : 0)
        if (!cache.has(key)) {
            cache.set(key, fn(...args));
        }
        return cache.get(key);
    };
   * Decorator designer pattern


    
  */
}