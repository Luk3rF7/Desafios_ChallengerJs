/*
Dado um trianglearray, retorne a soma mínima do caminho de cima para baixo .

Para cada etapa, você pode passar para um número 
adjacente da linha abaixo. Mais formalmente, se você estiver no
índice ida linha atual, poderá passar para o índice iou para o índice i + 1da próxima linha.
*/

const trinagulo = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]


const mininumTotal = function (triangle) {

  const table = [];

  for (let row of triangle)
    table
      .push(new Array(row.length)
        .fill(0));

  table[0] = triangle[0];

  // loop
  for (let row = 1; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      if (col === 0) {
        table[row][col] =
          table[row - 1][col] +
          triangle[row][col];

      } else if (col === table[row].length - 1) {
        table[row][col] =
          table[row - 1][table[row - 1].length - 1] +
          triangle[row][col];
      } else {
        table[row][col] =
          Math.min(table[row - 1][col],
            table[row - 1][col - 1]) +
          triangle[row][col];
      }
    }
  }
  return Math.min(...table[table.length - 1]);
}

// menor ms

var minimumTotal = function (triangle) {
  let accumulatedCost = triangle[triangle.length - 1]

  for (let i = triangle.length - 1; i > 0; i--) {
    let ccost = []
    for (let j = 0; j < triangle[i].length - 1; j++) {
      let upIndex = Math.floor((j + j + 1) / 2)
      let upperValue = triangle[i - 1][upIndex]
      ccost[upIndex] = Math.min(upperValue + accumulatedCost[j],
        upperValue + accumulatedCost[j + 1])
    }
    accumulatedCost = ccost
  }

  return accumulatedCost[0]
};