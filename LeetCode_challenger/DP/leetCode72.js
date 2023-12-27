/* 

Dadas duas strings word1e word2,
 retorne o número mínimo de operações necessárias 
 para converter word1emword2 .

Você tem as três operações a 
seguir permitidas em uma palavra:

Insira um caractere
Excluir um personagem
Substituir um personagem
 */

const buildTable = (len1, len2) => {
  const table = [];

  // letras 
  for (let r = 0; r < len1 + 1; r++) {
    table[r] = []
    for (let c = 0; c < len2 + 1; c++) {
      table[r].push(0);
    }
  }
  // tabela 
  for (let r = 0; r < table.length; r++) {
    table[r][0] = r;
    for (let c = 0; c < table[r].length; c++) {
      table[0][c] = c
    }
  }
  return table
}

var minDistance = function (word1, word2) {
  // building palavras
  const table = buildTable(word1.length, word2.length);

  for (let r = 1; r < table.length; r++) {
    for (let c = 1; c < table.length; c++) {
      if (word1[r - 1] === word2[c - 1]) {
        table[r][c] = table[r - 1][c - 1];
      } else {
        table[r][c] = 1 + Math.min(table[r - 1][c], table[r][c - 1], table[r - 1][c - 1]);
      }
    }
  }
  return table[table.length - 1][table[0].length - 1];
}

console.log(minDistance('horse', 'ros'))