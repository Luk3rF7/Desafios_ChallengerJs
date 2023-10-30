/* 
 Escreva uma função que permita contar o número de vogais
contidas em uma string fornecida pelo usuário. Por exemplo,
o usuário informa a string “Beterraba”, e a função retorna
 o número 4 (há 4 vogais nessa palavra).
*/

function countVowels(string) {

  if (typeof string !== 'string') {
    return 'Esse valor não e texto !'
  }

  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"]

  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === vowels[0] ||
      string.charAt(i) === vowels[1] ||
      string.charAt(i) === vowels[2] ||
      string.charAt(i) === vowels[3] ||
      string.charAt(i) === vowels[4]) {
      count++;
    }
  }
  return count
}

console.log(countVowels('javaScript'))
