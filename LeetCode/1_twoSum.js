/* 
 given an array of integers return indices of the two number
 such that they add up to a specific target

 you may assume that each input would have exactly one 
 solution and you not use the same element twice

 gives nums = [2,7,11,15] = target = 9

 because nums[0] + num[1] = 2 + 7 = 9
 return [0,1]
*/
const nums = [2, 7, 11, 15]

const twoSum = function (nums, target) {

  let numLength = nums.length;

  // vou percorrer array para pega primeiro numero:
  for (let i = 0; numLength; i++) {

    //percorro array para pega segundo numero:
    for (let j = 0; j < numLength; j++) {

      //faço check para somar os numero e retorna como target
      if (nums[i] + nums[j] === target && i !== j) {
        // adiciono como retorno o valor 1 e 2
        return [i, j]
      }
    }
    console.error('no são dois numeros')
  };

};

console.log(twoSum(nums))