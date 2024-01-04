/* 
? https://www.codewars.com/kata/56dd9b84fe5754786f0014f7/train/javascript
todo: implement filter - array fundaments
*/

Array.prototype.filter = function (func) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      result.push(this[i])
    }
  }
  return result;
}


