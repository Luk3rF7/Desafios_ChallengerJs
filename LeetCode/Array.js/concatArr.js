/**
 * @param {number[]} nums
 * @return {number[]}
 */
const arr = [1, 2, 1]
var getConcatenation = function (nums) {
  const arr2 = [...nums, ...nums]
  return arr2
};
console.log(getConcatenation(arr))
// 37ms 
var getConcatenation = function (nums) {
  return nums.concat(nums);
};