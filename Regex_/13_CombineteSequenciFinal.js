/* 
No último desafio, você aprendeu a usar o caractere circunflexo para
procurar padrões no início de strings. Também existe uma maneira de
procurar padrões no final das strings.
Você pode pesquisar o final das strings usando o cifrão $no final da regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
*/