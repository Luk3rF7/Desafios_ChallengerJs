var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement))
      return [map.get(complement), i]
    map.set(nums[i], i)
  }

};
twoSum([2, 7, 11, 15], 17)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)