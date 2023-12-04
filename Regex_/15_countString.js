/* 
Você aprendeu que pode usar um atalho para corresponder 
alfanuméricos [A-Za-z0-9_]usando \w. Um padrão natural que
você pode querer pesquisar é o oposto dos alfanuméricos.
Você pode procurar o oposto de \wwith \W. Observe que o 
padrão oposto usa uma letra maiúscula. Este atalho é igual 
ao [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
A primeira matchchamada retornaria o valor ["%"]e a segunda retornaria ["!"].
*/