/* 
? https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
todo : Regex - String
*/

function lowercaseCount(str) {
  //How many?
  return (str.match(/[a-z]/g) || []).length
};

function indexOf(str, charAt) {
  // contador
  let index = 0;
  // enqto a string for menor que contador 
  while (index < str.length) {
    // se string for  igual char me retorne
    if (str[index] == charAt) {
      return index
    }
    index++
  }
  return -1
}

function findLowerCaseCount(str) {
  let result = 0;
  let alphabet = 'abcdefghijklmnopqrstuvxyz';

  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (indexOf(alphabet, character) >= 0) {
      result++
    };
  }
  return result
};