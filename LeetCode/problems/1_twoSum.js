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
  for (let index = 0; numLength; index++) {
    //percorro array para pega segundo numero:
    for (let elem = 0; elem < numLength; elem++) {
      console.log('valores', nums[index])
      //faço check para so mar os numero e retorna como target
      if (nums[index] + nums[elem] === target && index !== elem) {

        // adiciono como retorno o valor 1 e 2
        return console.log([index, elem])
      }
    }
    return console.error('no são dois numeros')
  };

};

twoSum(nums, 9)
