/*
? https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
todo : arrays
*/
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(args)
//   }
// }

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
console.log(min([34, 15, 88, 2]))