stairsIn20 = s => 20 * s.reduce((prev1, curr1) => prev1 + curr1.reduce((prev2, curr2) => prev2 + curr2, 0), 0)

// #2 inperativa
function stairsIn20(s) {
  for (var i = 0, sum = 0; i < s.length; i++) {
    for (var j = 0; j < s[i].length; j++) {
      sum += s[i][j];
    }
  }
  return sum * 20;
}
// # 3 funcional :

const stairsIn20 = s => s.flat().reduce((p, c) => p + c, 0) * 20