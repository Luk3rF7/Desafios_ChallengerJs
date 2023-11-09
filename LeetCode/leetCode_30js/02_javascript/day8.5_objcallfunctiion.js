const person = {
  name: 'Developer'
}

function printName() {
  console.log(this.name)
}

printName(person) // retorno e undefined 
printName.apply(person) // com apply consigo pega obj sem utilizar this.

// caso eu passe argumento
function printGreeting(greenting) {
  console.log(`${greenting} ${this.name}`);
}

// vai sair hello e dar undefined person
printGreeting(person, 'hello')
// para passar o valor preciso adicionar [] caso contrario da error
printGreeting.apply(person, ['hello'])