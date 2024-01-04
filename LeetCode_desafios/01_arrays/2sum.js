/* 
 * Dada uma matriz inteira nums, retorne todos os trigêmeos
  ?    [nums[i],nums[j], nums[k]] 
                       * tais que :
i != j, i != k, e j != k, e nums[i] + nums[j] + nums[k] == 0.

Observe que o conjunto de soluções não deve conter trigêmeos duplicados.
 ? Entrada: nums = [-1,0,1,2,-1,-4]
!  Saída: [[-1,-1,2],[-1,0,1]]
*/
var threeSum = function (array) {
  array.sort((a, b) => a - b);

  const triplets = []; // 

  for (let i = 0; i < array.length - 2; i++) {
    // aqui comparamos se array i e diferende de arrray -1
    if (array[i] != array[i - 1]) {
      // se for ele vai percorrer aqui add a left
      let left = i + 1;
      //e renomeando right 
      let right = array.length - 1;
      // enquanto left for menor q direita
      while (left < right) {

        const currentSum = array[i] + array[left] + array[right];

        if (currentSum === 0) {

          triplets.push([array[i], array[left], array[right]]);

          while (array[left] == array[left + 1]) left++

          while (array[right] == array[right - 1]) right--

          left++;
          right--;
        } else if (currentSum < 0) {
          left++
        } else if (currentSum > 0) {
          right--
        }
      }
    }
  }
  return triplets
};

// # 2
const threeSum = nums => {
  const res = [];
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i += 1) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    let l = i + 1;
    let r = sorted.length - 1;
    while (l < r) {
      const sum = sorted[i] + sorted[l] + sorted[r];

      if (sum > 0) r -= 1;
      else if (sum < 0) l += 1;
      else {
        res.push([sorted[i], sorted[l], sorted[r]]);
        l += 1;
        while (sorted[l] === sorted[l - 1] && l < r) l += 1;
      }
    }
  }

  return res;
};
