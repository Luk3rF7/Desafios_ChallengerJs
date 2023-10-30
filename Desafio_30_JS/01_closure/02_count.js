var createCounter = function (n) {
  let count = n
  return function () {
    return count++
  };
};

// com classe 

class Count {
  constructor(n) {
    this.n = n
  }
  increment() {
    return this.n++;
  }
}
const counter = new Count(10)
console.log(counter)
counter.increment()
console.log(counter)