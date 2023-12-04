/* 
O último desafio utilizou o +sinal de mais para procurar caracteres 
que ocorressem uma ou mais vezes. Também existe uma opção que 
corresponde a caracteres que ocorrem zero ou mais vezes.
O caractere para fazer isso é o asterisco ou estrela: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = / go* /;

soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
Em ordem, as três matchchamadas retornariam os valores 
["goooooooo"],, ["g"]e null.

*/
