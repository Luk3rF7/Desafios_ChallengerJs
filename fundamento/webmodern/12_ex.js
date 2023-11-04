/* 
Quando temos um objeto e manipulamos seus atributos,
adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto
 continua o mesmo, ou seja a sua referência de memória
é a mesma.Num projeto que você está trabalhando, 
você foi designado a refatorar diversas funções para que
façam cópias de objetos e manipulem os dados dessas cópias, 
com o intuito de evitar efeitos indesejáveis em algumas situações
devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro
e, como segundo parâmetro, o nome de uma propriedade contida nesse
objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro.

*/

const obj1 = {
  a: '1',
  b: '2'
}
const obj2 = {
  id: 20,
  nome: "caneta",
  descricao: "Não preenchido"
}
function removeObj(obj, remove) {
  const copyObj = Object.assign({}, obj);
  delete copyObj[remove];

  return copyObj
}

console.log(removeObj(obj1, "a"))
console.log(removeObj(obj2, "id"))

function objSpread(obj, propy) {
  const copyObj = { ...obj };
  delete copyObj[propy];
  return console.log(copyObj);

}
objSpread(obj2, 'descricao')