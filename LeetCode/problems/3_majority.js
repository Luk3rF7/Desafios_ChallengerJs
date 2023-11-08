/* 
  3 - Majority Element:

  given an array of size n,find the majority element,
  the majority element is the element appears more than L n/2 j times.

  you may assume that the array is non-empty and the majority
  element always exist in the array

  examples:

  input = [3,2,3]
  output: 3

  input = [2,2,1,1,1,2,2]
  output = 2
  */
const arr = [3, 2, 3]
const majorityElement = function (nums) {
  const hash = {}

  // iterar entre numeros p/ adiciona no obj hash
  for (let num of nums) {

    /* 
    Diminuindo codigo com tenario:
      
    !hash[num] ? hash[num] :  hashnum++;
    */
    if (!hash[num]) {
      hash[num] = 1
    } else {
      hash[num]++;
    }
    console.log('hash', hash)
  }

  let count = 0;
  let valorName = 0;
  /* 
   todo utilizando for 

   let numLength = nums.length;

   for(let i = 0; i < numLength; i++){
    !hash[nums[i]] ? hash[nums[i]] =1 : hash[nums[1]]++;
    if(!hash[nums[i]] > count){
      count = hash[nums[i]];
      valorNome = nums[i]
    }
   }
  */
  // itaração das chaves do obj
  for (let valor in hash) {
    // comparação de hash valor igual azero
    if (hash[valor] > count) {
      count = hash[valor]
      valorName = valor;
    }
  }
  return valorName;
}
majorityElement(arr)