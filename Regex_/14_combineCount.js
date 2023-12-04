/* Usando classes de caracteres, você conseguiu pesquisar todas 
as letras do alfabeto com [a-z]. Esse tipo de classe de caracteres 
é comum o suficiente para que exista um atalho para ela, embora também 
inclua alguns caracteres extras.A classe de caracteres mais próxima 
em JavaScript que corresponde ao alfabeto é \w. Este atalho é igual a 
[A-Za-z0-9_]. Esta classe de caracteres corresponde a letras maiúsculas 
e minúsculas, além de números. Observe que esta classe de caracteres também 
inclui o caractere sublinhado ( _).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
Todas essas quatro testligações retornariam true.

Essas classes de caracteres de atalho também são conhecidas como classes 
de caracteres abreviados . */