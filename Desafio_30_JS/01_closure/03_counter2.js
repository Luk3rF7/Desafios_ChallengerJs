var createCounter = function (init) {
  let count = init
  const increment = () => ++count

  const decrement = () =>  return --count
    function reset() {
      count = init
      return count;
    }

    // 
    return {
      increment,
      decrement,
      reset
    }
  };

  //POO 
  class CreateCounter {
    constructor(init) {
      this.init = init
      this.count = init
    }
    incremenent() {
      return ++this.init
    }

    decrement() {
      return --this.init
    }
    reset() {
      this.count = this.init
      return this.init
    }
  }

  const createCount2 = new CreateCounter(5)

  createCount2.incremenent()
  console.log(createCount2)
  createCount2.decrement()
  console.log(createCount2)
  createCount2.reset()
  console.log(createCount2)

