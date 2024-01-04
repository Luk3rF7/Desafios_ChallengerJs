/* 

todo : Criar tabela ASCII E criar app de conversão de texto
*/
var ArrowFunc = function (arr) {
  const num = array => String.fromCharCode(array)
  return arr.map(arg => num(arg)).join('');
}
console.log(ArrowFunc([84, 101, 115, 116]))
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]))
