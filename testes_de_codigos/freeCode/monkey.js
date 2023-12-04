function chunkArrayInGroups(arr, size) {
  let newArr = []
  let midArr = Math.floor(arr.length / 2)

  for (let index = 0; index < arr.lengh; index++) {
    let arr2 = arr[i].splice(size, midArr);
    console.log(arr2)

  }
  // console.log(midArr)



}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)