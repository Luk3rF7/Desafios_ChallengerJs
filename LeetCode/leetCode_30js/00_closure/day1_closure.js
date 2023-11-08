/* 
Escreva uma função  createHelloWorld. Deve retornar uma nova função 
que sempre retorna  "Hello World".
 

Exemplo 1:

Entrada: args = []
 Saída: "Olá Mundo"
 Explicação:
const f = criarOláMundo();
f(); // "Olá Mundo"

A função retornada por createHelloWorld deve sempre retornar "Hello World".
*/

const createHelloWorld = function (arg) {
  //
  return function (...args) {
    return arg + ' hello world!'
    // adicionando () consigo fazer IIFE
  }();
};

const hello = createHelloWorld('lc');
console.log(hello);

// * Function hoisting Como funciona
add(1, 2)

// * consigo invocar antes de criar 
function add(a, b) {
  return console.log(a + b);
}
/*
 * as function hoisting so funciona com funcao e nao com variaveis
 * pois variaveis tem que ser chamada pos criado evitar o hoisintg
   const add = (a, b) => {
   return console.log(a + b)
}
*/
// * outro efeito de closure /hoisting 
function countCreate() {
  let count = 0

  function increment() {
    return ++count
  }
  return {
    increment: increment
  }
}

// 
const count1 = countCreate()
const count2 = countCreate()

console.log(count1.increment())
console.log(count1.increment())
// retorna dois 
console.log(count2.increment())
// retorna 1 pois instancia e diferente e nao causa effect

// ** Spread Operator

const a = [1, 2]
const b = [3, 4]

// com isso eu junto ou concateno os valores 
console.log([...a, ...b])

const impar = [1, 3, 5, 7]
const par = [2, 4, 6, 8, 10]
function addSprea(...args) {
  console.log(args[0] + ',' + args[1])
}

//consigo utiliza com função tbm
addSprea(2, 8)
addSprea(impar, par)
