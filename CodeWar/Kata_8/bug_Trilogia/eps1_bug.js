/* 
? https://www.codewars.com/kata/562e98755e9214cd2500003d/train/javascript
todo: bug - depuraçao
*/
function yourFutureCareer() {
  var career = Math.random();

  if (career <= 0.32) {
    return 'FrontEnd Developer';
  } else if (career <= 0.65) {
    return 'BackEnd Developer';
  } else {
    return 'Full-Stack Developer';
  }

}

