/* 
Até agora, você só conseguiu extrair ou pesquisar um padrão uma vez.
Aqui matchvoltaria ["Repeat"].
Para pesquisar ou extrair um padrão mais de uma vez, você pode usar 
o sinalizador de pesquisa global: g.
E aqui matchretorna o valor["Repeat", "Repeat", "Repeat"]
*/
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// 
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);