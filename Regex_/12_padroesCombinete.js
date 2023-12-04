/* 
Desafios anteriores mostraram que expressões regulares podem ser
usadas para procurar diversas correspondências. Eles também são
usados ​​para procurar padrões em posições específicas em strings.

Em um desafio anterior, você usou o caractere circunflexo ( ^) 
dentro de um conjunto de caracteres para criar um conjunto de
caracteres negados no formato [^thingsThatWillNotBeMatched]. 
Fora de um conjunto de caracteres, o cursor é usado para 
procurar padrões no início das strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
 */