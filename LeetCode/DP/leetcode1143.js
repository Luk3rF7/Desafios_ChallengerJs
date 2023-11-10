/*
Dadas duas strings text1e text2, retorne o comprimento de sua subsequência comum mais longa . Se não houver subsequência comum , retorne 0.

Uma subsequência de uma string é uma nova string gerada a partir da string original com alguns caracteres (pode ser nenhum) excluídos sem alterar a ordem relativa dos caracteres restantes.

Por exemplo, "ace"é uma subsequência de "abcde".
Uma subsequência comum de duas strings é uma subsequência comum a ambas as strings.

 Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
*/
// * programação dinamica!

var longestCommonSubsequence = function (text1, text2) {
  // crio tabela 2d de array
  const table = Array.from({ length: text1.length + 1 },
    () => new Array(text2.length + 1).fill(''));

  for (let row = 1; row < table.length; row++) {
    for (let col = 1; col < table[row].length; col++) {
      if (text1[row - 1] === text2[col - 1]) {
        table[row][col] = table[row - 1][col - 1] + text1[row - 1];
      } else {
        let rightChar = table[row - 1][col];
        let leftChar = table[row][col - 1]
        table[row][col] = rightChar.length > leftChar.length ?
          rightChar : leftChar;
      }

    }
  }
  return table[table.length - 1][table[0].length - 1].length;

};

console.log(longestCommonSubsequence('abcde', 'abc'));