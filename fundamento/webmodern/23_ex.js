/* 
Considere que todas as palavras só são 
separadas por um espaço.

*/
const frase1 = "Sou uma Frase"
const frase2 = "Me divirto aprendendo a programar"

function countLetter(frase) {
  const palavras = frase.split(" ");

  return palavras.length;
}
console.log(countLetter(frase1));
console.log(countLetter(frase2));



console.log(countMap(frase2))