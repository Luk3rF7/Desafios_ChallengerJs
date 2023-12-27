/*
Dado um número inteiro numRows, retorne o primeiro 
numRows do triângulo de Pascal .
No triângulo de Pascal , cada número é a soma dos dois números diretamente 
acima dele, conforme mostrado: 
 */

var generate = function (numRows) {
  // verifico  as linhas 
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const trinaguloPascal = [[1]];

  //faço iteração para adicionar:
  for (let i = 1; i < numRows; i++) {
    let prevRow = trinaguloPascal[i - 1];
    const curRow = [];

    curRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {

      curRow[j] = prevRow[j] + prevRow[j - 1]
    }
    curRow.push(1);

    trinaguloPascal.push(curRow);
  }
  return trinaguloPascal;
}

console.log(generate(5))

// segunda opção
var generate2 = function (numRows) {
  const res = []
  let arr = [1]
  for (let i = 0; i < numRows; i++) {
    if (i === 0) res.push([1])
    else if (i === 1) res.push([1, 1])
    else {
      for (let i = 0; i + 1 < res.at(-1).length; i++) {
        arr.push(res.at(-1)[i] + res.at(-1)[i + 1])
      }
      arr.push(1)
      res.push(arr)
      arr = [1]
    }
  }
  return res
}