// resolução 1
var map = function (arr, fn) {
  return arr.map(fn)
};

//function 

const map = function (arr, fn) {
  let res = []
  for (const n of arr) {
    res.push(fn(arr[i], i))
  }
  return res
}

// dynamic 

function arr2(arr, fn) {
  const res = new Array(arr.length);

  for (const i in arr) {
    res[i] = fn(arr[i], Number(i))
  }
  return res
}


