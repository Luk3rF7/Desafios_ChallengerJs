/* 
!Link 
? https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
todo POO
*/
var Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)];
};
class Ghost {
  constructor() {
    this.color = ['white', 'yellow', 'purple', 'red']
  }

  colors() {
    const length = this.color.length
    const numAleatorio = Math.floor(Math.random() * length)
    return this.color[numAleatorio]
  }

}
class Ghost {
  constructor() {
    this.colors = ['white', 'yellow', 'purple', 'red']
  }

  get color() {
    const randomPosition = Math.trunc(Math.random() * this.colors.length)
    return this.colors[randomPosition]
  }
}
const ghostColor = new Ghost();
console.log(ghostColor.colors())
console.log(ghostColor.colors2())