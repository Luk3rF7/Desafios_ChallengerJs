/* 
 * Single number :

given a non-empty array of integers,every element appears
twice except for one,Find that single one 

Your algorithm should have a linear runtime complexity,could you
implement iot whitout using extra memory 
 
todo Example:

input : [2,2,1]
output : 1
todo Example:

input : [4,1,2,1,2]
output : 4
*/
const arr = [4, 1, 2, 1, 2]
const singleNum = function (array) {

  let arrLeng = array.length

  // iterero sobre array 
  for (let i = 0; i < arrLeng; i++) {
    //guarda primeiro valor 
    let valor = array[0];
    //
    array = array.slice(1);
    //checo caso tenha alguma numero repetido:
    if (array.indexOf(valor) === -1) {
      // vai retorna unico valor do array
      return valor;
    } else {
      // vai remover numero duplicato que tiver no array
      array.splice(array.indexOf(valor), 1)
      console.log('vetor: ', array);
    }
  }
};

console.log(singleNum(arr));

// resolvendo com for of :

const objSingleNum = function (array) {
  //crio obj p/ guarda os valores
  const objSingle = {}

  // iterajo com array
  for (valor of array) {
    //checo se obj estiver vazio
    if (!objSingle[valor]) {
      objSingle[valor] = 1
    } else {
      objSingle[valor]++;
    }
    console.log('objSingle :', objSingle)
  }
  // faço retorno adicionando valor e criando novo obj
  // busco se valor da chave e igual ou 1
  return Object.keys(objSingle)
    .find(key => objSingle[valor] === 1)
}

objSingleNum(arr)

// utilizando metodo do array :

const arrSingleNum = function (array) {
  const arrSingle = array.reduce((a, b) => { return a ^ b })
  return arrSingle
}

console.log(arrSingleNum(arr))