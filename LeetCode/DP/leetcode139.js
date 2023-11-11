/* 
Dada uma string se um dicionário de strings wordDict,
o retorno trueif spode ser segmentado em uma sequência 
separada por espaço de uma ou mais palavras do dicionário.

Observe que a mesma palavra no dicionário pode 
ser reutilizada várias vezes na segmentação.

Exemplo 1:

Entrada: s = "leetcode", wordDict = ["leet","code"]
Saída: true
Explicação: Retorna true porque "leetcode" 
pode ser segmentado como "leet code".
*/
const warBreak = function (s, wordDict) {
  // crio array da string
  const table = new Array(s.length + 1).fill(false);
  // caso tenha fica true
  table[0] = true;
  // iterajo pela table
  for (let i = 0; i < table.length; i++) {
    //caso tabela de false continue
    if (table[i] === false) continue;
    // iterajo  pela tabela e comparo valor da tabel com string
    for (let j = i + 1; j < table.length; j++) {
      if (wordDict.includes((s.slice(i, j))){
        table[j] = true
      })
    }
  }
  return table[table.length - 1]
}

var wordBreak = function (s, wordDict) {
  var dp = new Array(s.length + 1).fill(false);


  dp[s.length] = true
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      if (s.slice(i, i + wordDict[j].length) == wordDict[j]) {
        dp[i] = dp[i + wordDict[j].length]
      }
      if (dp[i]) {
        break
      }
    }
  }
  return dp[0]
};
