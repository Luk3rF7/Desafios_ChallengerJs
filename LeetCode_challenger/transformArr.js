const loopsMap = function (arr, fn) {
  for (const index in arr) {
    fn(arr[index], index)
  }
}
var map = function (arr, fn) {
  // create new array of original arr elements to avoid having to push onto array
  const newArr = [...arr]
  // update each element in the array by running the function on it
  for (i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i)
  }
  return newArr
};