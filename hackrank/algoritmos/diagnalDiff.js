function diagonalDiff(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < arr.length; i += 1) {
    leftDiagonal += arr[i][i]
    rightDiagonal += arr[i][arr.length - 1 - i]
  }
  return Math.abs(leftDiagonal - rightDiagonal)
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(diagonalDiff(arr))