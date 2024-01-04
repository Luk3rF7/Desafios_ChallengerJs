var findMedianSortedArrays = function (nums1, nums2) {
  let compare = (a, b) => a - b;

  const concatArr =
    nums1
      .concat(nums2)
      .sort(compare);

  if (concatArr.length % 2 == 0) {
    return (
      concatArr[concatArr.length / 2 - 1] + concatArr[concatArr.length / 2]) / 2;
  }
  return concatArr[Math.floor(concatArr.length / 2)];
};


// #2 
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2);
  arr = arr.sort((a, b) => a - b)
  let l = arr.length

  let median = 0;
  if (l % 2 !== 0) {
    median = arr[(l - 1) / 2];
  } else {
    let medInd = arr[(l - 2) / 2] + arr[(l) / 2];
    median = medInd / 2
  }
  return median;

};
console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))