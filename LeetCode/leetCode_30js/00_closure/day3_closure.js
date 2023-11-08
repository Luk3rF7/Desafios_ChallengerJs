/* 
Escreva uma função  createCounter. Deve aceitar um número inteiro inicial 
init. Deve retornar um objeto com três funções.

As três funções são:

increment() aumenta o valor atual em 1 e depois o retorna.
decrement() reduz o valor atual em 1 e depois o retorna.
reset() define o valor atual como  init e depois o retorna.
*/
const createCounter = function (init) {
  let initValue = init
  function incremente() {
    return ++initValue
  }
  function decrement() {
    return --initValue
  }
  function reset() {
    return initValue = init
  }

  return {
    incremente,
    decrement,
    reset
  }
}

const counter = createCounter(10)

console.log(counter.incremente())
console.log(counter.incremente())
console.log(counter.incremente())
console.log(counter.incremente())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.decrement())
console.log(counter.decrement())
