/* 
Crie uma função que retorna a string "Olá, "
concatenada com um argumento text (a ser passado para a função) e
com ponto de exclamação "!" no final.
*/


// exemplo 1: 
function cumprimentar(nome) {
  const saudacao = "OLá"
  return [saudacao, nome].join(', ').concat("!");
}

console.log(cumprimentar("lucas"));

const saudacao = (nome) => {
  return 'Olá, ' + nome + "!"
}

console.log(saudacao('lucas'))
function saddTemplate(nome) {
  return `Olá, ${nome}`;
}

console.log(saddTemplate("victoria"))