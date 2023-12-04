/*
Usando expressões regulares como /coding/, você pode procurar o padrão
codingem outra string.Isso é poderoso para pesquisar strings únicas, 
mas está limitado a apenas um padrão. Você pode pesquisar vários padrões
usando o operador alternationou : .OR| Este operador corresponde aos
padrões antes ou depois dele. Por exemplo, se você quiser corresponder
as strings yesou no, a regex desejada é /yes|no/.Você também pode
 pesquisar mais do que apenas dois padrões. Você pode fazer isso 
 adicionando mais padrões com mais ORoperadores separando-os, como 
 /yes|no|maybe/. 
 */
let petString = "James has a pet cat.";
let petRegex = /dog|cat|fish|/; // Change this line
let result = petRegex.test(petString);