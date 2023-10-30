/* 
Considere a realização de uma pesquisa com mil pessoa
p/ obter das seguintes informação o valor
da maior altura;ovalor da menor altura,a media das altura
quantas pessoa tem altura inferior a media da altura 

considere ainda,que um programador foi selecionado
para desenvolver um modelo de codigo que soluciona o problema
automatizando a coleta das altura e a geração das informação
com base nas informação apresentadas ,desenvolva o codigo adequado para resolver
o problema usando pseudocodigo ou um linguagem de programação
*/
let alturas = [];
function criaPessoa(num) {
  for (let index = 0; index < num; index += 1) {
    alturas.push((Math.random() * (2.5 - 1.3) + 1.3));
  }
};

criaPessoa(10);

// console.log(alturas);
// console.log((Math.random() * (2.5 - 1.3) + 1.3).toFixed(2));

let soma = 0;
alturas.forEach((altura) => soma += altura);

const media = (soma / alturas.length);

// console.log(soma);

let menorMedia = 0;
alturas.forEach((altura) => {
  if (altura < media) menorMedia += 1;
});

console.log(`Menor altura: ${(alturas.sort()[0]).toFixed(2)}`);
console.log(`Maior altura: ${(alturas.sort((a, b) => b - a)[0]).toFixed(2)}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Quantidade de pessoas com altura menor que a média: ${menorMedia}`);