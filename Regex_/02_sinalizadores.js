/* 
Até agora, você olhou para regexes para fazer correspondências literais de 
strings. Mas às vezes você também pode querer combinar diferenças de
maiúsculas e minúsculas. Maiúsculas (ou às vezes maiúsculas) é a diferença
entre letras maiúsculas e  minúsculas. Exemplos de letras maiúsculas são A, B, 
e C. Exemplos de letras minúsculas são a, be c.Você pode combinar ambos os 
casos usando o que é chamado de sinalizador. Existem outros sinalizadores,
mas aqui você se concentrará no sinalizador que ignora maiúsculas e 
minúsculas - o isinalizador. Você pode usá-lo anexando-o ao regex. 
Um exemplo de uso deste sinalizador é /ignorecase/i. Este regex
pode corresponder às strings ignorecase, igNoreCasee IgnoreCase.

*/
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);