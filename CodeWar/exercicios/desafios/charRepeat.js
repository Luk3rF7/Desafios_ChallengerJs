function doubleChar(s) {
  // Your code here
  // split the string into individual char array
  s.split('').map(function (v) {
    // iterate and update
    return v + v;
    // join the updated array
  }).join('')
  return s
}

const hw = 'hello world'
const st = 'String'
const num = '1234!_'
const abc = 'aabbccdd'
console.log(doubleChar(hw))
console.log(doubleChar(st))
console.log(doubleChar(num))
console.log(doubleChar(abc))