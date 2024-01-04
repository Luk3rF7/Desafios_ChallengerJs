function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, z) => a - z)))


}
const arr = [1, 2, 3]
const arr1 = [4, 5, 6]
const voidArr = [[], [1, 2, 3]]

console.log(mergeArrays(arr1, arr))
console.log(mergeArrays(voidArr))
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))