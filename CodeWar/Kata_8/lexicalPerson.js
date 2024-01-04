/* 
! link :
? https://www.codewars.com/kata/55a13556ca4a6d0ab4000003/train/javascript
todo: fundamentos
*/

var Person = function () {
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      return this._friends.push(...f)
    }
  }
  return person;
}

