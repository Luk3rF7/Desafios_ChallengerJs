function popElement(arr) {
  //pop an element from arr
  const arrT = arr.length
  if (arrT <= 1) {
    return arr.pop()
  } else {
    return undefined
  }

}
console.log(popElement([1, 2, 3]))