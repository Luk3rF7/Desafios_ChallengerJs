/* 
Lembre-se de que você usa o sinal de mais +para procurar um ou mais caracteres 
e o asterisco *para procurar zero ou mais caracteres. Eles são convenientes, 
mas às vezes você deseja combinar uma determinada variedade de padrões.
Você pode especificar o número inferior e superior de padrões com 
especificadores de quantidade . Os especificadores de quantidade são usados 
  com chaves ( {e }). Você coloca dois números entre as chaves - para o número 
inferior e superior de padrões.
Por exemplo, para corresponder apenas à letra aque aparece entre 3e 5na 
string ah, sua regex seria /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
A primeira testchamada retornaria true, enquanto a segunda retornaria false.
*/