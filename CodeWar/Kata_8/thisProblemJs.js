/* 
!link:
?https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
todo: POO - fundamentos
*/
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return this.name = `${first} ${last}`;
}
var n = new NameMe('John', 'Doe')


console.log(n.name)