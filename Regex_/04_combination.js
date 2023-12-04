/* 
Às vezes você não saberá (ou não precisará) saber os caracteres exatos em seus
padrões. Pensar em todas as palavras que correspondem, digamos, a um erro
ortográfico levaria muito tempo. Felizmente, você pode economizar tempo 
usando o caractere curinga:.O caractere curinga .corresponderá a 
qualquer caractere. O curinga também é chamado dote period. Você pode usar
o caractere curinga como qualquer outro caractere na regex. Por exemplo,
se você quiser corresponder hug, huh, hute hum, poderá usar o regex /hu./
para corresponder todas as quatro palavras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

Ambas as testchamadas retornariam true
*/