/*
Você aprendeu como combinar padrões literais(/literal/) e 
caracteres curinga(/./).Esses são os extremos das expressões 
regulares, onde uma encontra correspondências exatas e a outra
corresponde a tudo.Existem opções que são um equilíbrio entre 
os dois extremos.Você pode procurar um padrão literal com alguma
flexibilidade com classes de caracteres.As classes de caracteres permitem
que você defina um grupo de caracteres que deseja corresponder, colocando
- os entre colchetes([e]).Por exemplo, você deseja corresponder bag, bige,
bugmas não bog.Você pode criar o regex / b[aiu]g / para fazer isso.A[aiu]é 
a classe de caracteres que corresponderá apenas aos caracteres a, i, ou u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

Em ordem, as quatro matchchamadas retornariam os valores["big"], ["bag"], ["bug"]e null.
*/