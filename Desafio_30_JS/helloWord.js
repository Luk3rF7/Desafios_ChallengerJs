const createHelloWorld = function (first, second) {
  return function (...args) {
    return "Hello World"
  }();
}
console.log(createHelloWorld('hello', ' world'))
//closure

function createCounter() {
  let value = 0

  function increment() {
    return ++value
  }

  return {
    increment: increment
  }
}

//spread e restpread 

let a = [2, 3]
let b = [2, 5]

console.log(...a, ...b)

function add(...args) {
  console.log(args[0] + args[1])
}

add(8, 2)