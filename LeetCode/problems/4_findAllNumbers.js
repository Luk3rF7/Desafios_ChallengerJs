/* 
  fiven an array of integers where 1 < a[i]
  < n (n = size of array),some elements 
  appear twice and other appear once

  find all the elements of[1,n] inclusive that do not
  appear in this array 

  could you do it whitout extra space and in O(n) runtime? 
  you may assume the returned list does not count as extra space

  Example:

  input = [4,3,2,7,8,2,3,1]
  output = [5,6]

 */

const findDisappearedNumbers = function (nums) {

  const result = [];
  let sortedArray = [..new Set(nums)].sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (sortedArray[i] !== i + 1) {
      sortedArray.splice(i, 0, i + 1)
      result.push(i + 1)
    }
  }
  return result;
};