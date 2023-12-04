/* 
* Os nomes de usuário são usados ​​em todos os lugares da Internet. 
* São eles que dão aos usuários uma identidade única em seus sites favoritos.
* Você precisa verificar todos os nomes de usuário em um banco de dados. 
* Aqui estão algumas regras simples que os usuários devem seguir ao criar 
* seu nome de usuário.

1. 
*Os nomes de usuário só podem usar caracteres alfanuméricos.

2.
* Os únicos números do nome de usuário devem estar no final. Pode haver zero 
* ou mais deles no final. O nome de usuário não pode começar com o número.

3.
* As letras do nome de usuário podem ser minúsculas e maiúsculas.

4.
* Os nomes de usuário devem ter pelo menos dois caracteres. 
* Um nome de usuário de dois caracteres só pode usar letras 
* do alfabeto como caracteres

*/
/* 
! Solution: 

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
*/