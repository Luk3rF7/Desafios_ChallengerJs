/* 
 !link :
 ? https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
 todo : string
*/

function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`

}

console.log(hello('marcia'))
console.log(hello('aliCE'))
console.log(hello(''))